import dotenv from 'dotenv';
dotenv.config();
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = new twilio(accountSid, authToken)

const servicesId = process.env.TWILIO_SERVICES_ID

export const doSms = (phone) => {
    let resp = {}
    return new Promise((resolve, reject) => {
        client.verify.services(servicesId).verifications.create({
            to: `+91${phone}`,
            channel: 'sms'
        }).then((resp) => {
            console.log(resp);
            resp.valid = true
            resolve(resp)
        }).catch((err) => {
            console.log(err);
            reject(err)
        })
    })
}

export const verifyOtp = (phone, otp) => {
    return new Promise((resolve, reject) => {
        client.verify.services(servicesId).verificationChecks.create({
            to: `+91${phone}`,
            code: otp
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

