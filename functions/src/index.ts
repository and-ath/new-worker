import * as admin from "firebase-admin";
import { mail } from "./mails";
import * as functions from "firebase-functions";

admin.initializeApp({});

export const mail_send = mail.send;

const items:any = [];
exports.getItems = functions.region('asia-northeast1').https.onCall((data, context) => {    
    return items;
});
