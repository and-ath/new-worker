import * as functions from "firebase-functions";
import * as sgMail from '@sendgrid/mail';
import * as fs from "fs";

const API_KEY = functions.config().sendgrid.key;

const pathToAttachment = `${__dirname}/attachment.pdf`;
const attachment = fs.readFileSync(pathToAttachment).toString("base64");

sgMail.setApiKey(API_KEY);

export const sendEmail = functions.region('asia-northeast1').https.onCall(
  async (data, context) => {
        const content = {
            to : data.email,
            cc : 'info@and-ath.com',
            from : 'noreply@and-ath.com',
            subject : '株式会社and-ath',
            templateId : 'd-6f4a65ae7c454563948a343a76541f65',
            dynamic_template_data : {
                name: data.name,
                body: data.body,
            },
            attachments: [
              {
                content: attachment,
                filename: "attachment.pdf",
                type: "application/pdf",
                disposition: "attachment"
              }
            ]
          }
          console.log(sgMail);
          console.log(content);
          try {
            const result = await sgMail.send(content);
            return result
          } catch (error) {
            console.error(error);
            if(error.response) {
              console.error(error.response.body)
            }
            return null
          }
        }
    );