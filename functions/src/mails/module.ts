import * as functions from "firebase-functions";
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;

sgMail.setApiKey(API_KEY);

// 送信に使用するメールサーバーの設定

export const sendEmail = functions.region('asia-northeast1').https.onCall(
    (data, context) => {
        return (content: {
            to: string;
            cc: string;
            from: string;
            templateId: string;
            dynamic_template_data: {};
        }) => {
            content.to = data.name;
            content.cc = 'info@and-ath.com';
            content.from = 'noreply@and-ath.com';
            content.templateId = 'd-36df7bcc51cc4417ba6169091c72e730';
            content.dynamic_template_data = {
                name: data.name,
                subject: data.subject,
                body: data.body,
            };

          return sgMail.send(content); 
        }
      }
    );