import admin from "firebase-admin";

function initFirebaseAdmin() {
  if (admin.apps.length) return admin.app();

  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!json) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON in environment");
  }

  const serviceAccount = JSON.parse(json);

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const firebaseAdminApp = initFirebaseAdmin();
export const firebaseAuth = admin.auth(firebaseAdminApp);
