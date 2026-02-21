import { Router } from "express";
import { firebaseAuth } from "../firebaseAdmin";

export const sessionRouter = Router();

// Set this to something like 5 days
const SESSION_EXPIRES_IN_MS = 5 * 24 * 60 * 60 * 1000;

/**
 * POST /session/login
 * Body: { idToken: string }
 * Returns: sets "session" cookie
 */
sessionRouter.post("/login", async (req, res) => {
  try {
    const { idToken } = req.body as { idToken?: string };
    if (!idToken) return res.status(400).json({ error: "idToken required" });

    // Verify ID token first
    const decoded = await firebaseAuth.verifyIdToken(idToken);

    // Mint a session cookie (server session)
    const sessionCookie = await firebaseAuth.createSessionCookie(idToken, {
      expiresIn: SESSION_EXPIRES_IN_MS,
    });

    res.cookie("session", sessionCookie, {
      httpOnly: true,
      secure: false, // set true in production HTTPS
      sameSite: "lax",
      maxAge: SESSION_EXPIRES_IN_MS,
      path: "/",
    });

    return res.json({
      ok: true,
      uid: decoded.uid,
      email: decoded.email ?? null,
    });
  } catch (e: any) {
    return res.status(401).json({ ok: false, error: e?.message });
  }
});

/**
 * POST /session/logout
 * Clears cookie and optionally revokes tokens
 */
sessionRouter.post("/logout", async (req, res) => {
  try {
    const sessionCookie = req.cookies?.session;
    res.clearCookie("session", { path: "/" });

    // Optional: revoke refresh tokens => force logout everywhere
    if (sessionCookie) {
      const decoded = await firebaseAuth.verifySessionCookie(sessionCookie);
      await firebaseAuth.revokeRefreshTokens(decoded.uid);
    }

    return res.json({ ok: true });
  } catch (e: any) {
    // Even if revoke fails, cookie is cleared
    return res.json({ ok: true });
  }
});

/**
 * GET /session/me
 * Reads session cookie and returns user info
 */
sessionRouter.get("/me", async (req, res) => {
  try {
    const sessionCookie = req.cookies?.session;
    if (!sessionCookie) return res.status(401).json({ error: "No session" });

    const decoded = await firebaseAuth.verifySessionCookie(sessionCookie, true);
    return res.json({ ok: true, user: decoded });
  } catch (e: any) {
    return res.status(401).json({ ok: false, error: "Invalid session" });
  }
});
