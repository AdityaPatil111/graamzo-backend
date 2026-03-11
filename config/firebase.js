import admin from "firebase-admin";
import fs from "fs";

import dotenv from "dotenv";

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
// const serviceAccount = JSON.parse(
//   fs.readFileSync("./serviceAccountKey.json", "utf8")
//);
// console.log("Service Account:", serviceAccount);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export default db;