import admin from "firebase-admin";
import fs from "fs";
import { mockProducts } from "./mockProducts.js";

const serviceAccount = JSON.parse(
    fs.readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadProducts() {
    try {
        for (const product of mockProducts) {
            await db
                .collection("products")
                .doc(product.id.toString())
                .set(product);
        }

        console.log("Products uploaded successfully!");
        process.exit();

    } catch (error) {
        console.error("Upload error:", error);
        process.exit(1);
    }
}

uploadProducts();