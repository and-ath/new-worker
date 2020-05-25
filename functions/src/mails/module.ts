import * as functions from "firebase-functions";
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;

sgMail.setApiKey(API_KEY);

export const sendEmail = functions.region('asia-northeast1').https.onCall(
  async (data, context) => {
        const content = {
            to : data.email,
            cc : 'info@and-ath.com',
            from : 'noreply@and-ath.com',
            subject : '株式会社&ath',
            templateId : 'd-36df7bcc51cc4417ba6169091c72e730',
            dynamic_template_data : {
                name: data.name,
                body: data.body,
            }
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