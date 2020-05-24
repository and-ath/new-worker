import * as admin from "firebase-admin";
import { mail } from "./mails";

admin.initializeApp({});

export const mail_send = mail.send;
