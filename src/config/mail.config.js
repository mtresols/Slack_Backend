import nodemailer from 'nodemailer'
import ENVIRONMENT from './environment.config.js'

const mailerTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Puerto 587 usa STARTTLS, no SSL directo
    auth: {
        user: ENVIRONMENT.EMAIL_USER,
        pass: ENVIRONMENT.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false // Evita el error de certificado SSL
    }
})

export default mailerTransporter;