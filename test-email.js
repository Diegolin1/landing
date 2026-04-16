const nodemailer = require('nodemailer');

const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

if (missingEnvVars.length > 0) {
  console.error(`[CONFIG ERROR] Missing env vars: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: String(process.env.SMTP_SECURE || 'true').toLowerCase() !== 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = process.env.EMAIL_TO || process.env.SMTP_USER;
  const from = process.env.EMAIL_FROM || `"Gestory" <${process.env.SMTP_USER}>`;

  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from,
      to,
      subject: 'Test Email',
      html: '<b>Hello world</b>',
    });
    console.log('[EMAIL TEST SUCCESS] Message sent: %s', info.messageId);
  } catch (error) {
    console.error('[EMAIL TEST ERROR]', error);
    process.exitCode = 1;
  }
}

testEmail();
