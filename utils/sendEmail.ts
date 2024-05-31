const nodemailer = require("nodemailer");
const validator = require("validator");

interface EmailData {
  name: string;
  phoneNumber: string;
  email: string;
}

interface EmailResponse {
  error?: string;
  success?: boolean;
}

const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  const { name, phoneNumber, email } = data;

  if (!validator.isEmail(email)) {
    return { error: "Invalid email format" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptionsToOwner = {
    from: process.env.EMAIL_USER,
    to: "artyom.m.zotov@gmail.com",
    subject: `Новая заявка от ${email}`,
    html: `
      <h1>Новая заявка</h1>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phoneNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
    `,
  };

  const mailOptionsToClient = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Ваша заявка принята",
    html: `
      <h1>Ваша заявка принята</h1>
      <p>Здравствуйте, ${name}!</p>
      <p>Мы получили вашу заявку и скоро свяжемся с вами.</p>
      <br>
      <p>С уважением,</p>
      <p><strong>Команда MediaWiz</strong></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptionsToOwner);
    await transporter.sendMail(mailOptionsToClient);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send email" };
  }
};

export default sendEmail;
