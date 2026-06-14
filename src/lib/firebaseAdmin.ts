/**
 * Server-side Firebase Admin SDK for verifying Google ID tokens.
 * Credentials come from env (FIREBASE_*); never expose the private key to the client.
 */
import admin from "firebase-admin";

function getPrivateKey() {
  // supports either raw key or key with \n escapes
  const key = process.env.FIREBASE_PRIVATE_KEY;
  if (!key) return undefined;
  return key.includes("\\n") ? key.replace(/\\n/g, "\n") : key;
}

if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = getPrivateKey();

  if (projectId && clientEmail && privateKey) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }
}

export { admin };
