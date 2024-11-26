// app/services/emailService.js
import sendGridMail from "@sendgrid/mail";

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendContactEmail = async ({ name, email, message }) => {
  const msg = {
    to: process.env.EMAIL_TO, // Recipient email address
    from: process.env.EMAIL_FROM, // Sender email address (must be a verified SendGrid address)
    subject: `New message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: `<p>You have received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
  };

  try {
    await sendGridMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email via SendGrid:", error);
    throw new Error("Error sending email");
  }
};
