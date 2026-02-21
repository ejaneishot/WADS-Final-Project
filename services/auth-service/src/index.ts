import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { sessionRouter } from "./routes/session";
import { firebaseAuth } from "./firebaseAdmin";

const app = express();
app.use(express.json());
app.use(cookieParser());

// If your frontend is on localhost:3000:
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.get("/debug/firebase", async (_req, res) => {
  const list = await firebaseAuth.listUsers(1);
  res.json({ ok: true, usersReturned: list.users.length });
});

app.use("/session", sessionRouter);

const PORT = Number(process.env.PORT || 4001);
app.listen(PORT, () => console.log(`auth-service running on port ${PORT}`));
