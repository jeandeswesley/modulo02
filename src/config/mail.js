export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com.br>',
  },
};
/**
 * Servidores de E-mail:
 * Amazon SES
 * Mailgum
 * Sparkpost
 * Mandril (Mailchimp)
 * Gmail (tem limite de envios)
 * Mailtrap (Usado somente para DEV)
 */
