import * as functions from "firebase-functions";

const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

export const send = functions.https.onCall(
    async (
      data: {
        lang: string;
        email: string;
        name: string;
        subject: string;
        body: string;
        type: "sales" | "support" | "info";
      },
      context
    ) => {
      const body =
        data.lang === "en"
          ? `Dear ${data.name}.
  Your inquiry has been submitted.
  Thanks for your inquiry.
  
  Inquiry details:
  ${data.body}`
          : `${data.name}様
  お問い合わせを送信しました。
  お問い合わせいただきありがとうございます。
  
  お問い合わせ内容:
  ${data.body}`;

  await new Promise<void>(() => {

        let adminMail = {
            to: adminEmail,
            email: data.email,
            subject: data.subject,
            body: body,
            type: data.type
        };

        try {
           mailTransport.sendMail(adminMail);
        } catch (e) {
            console.error(`send failed. ${e}`);
            throw new functions.https.HttpsError('internal', 'send failed');
          }
    });
    }
);