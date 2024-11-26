import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Step 1: Parse the request body
    const { name, email, message } = await req.json();
    console.log("Received data:", { name, email, message });

    // Step 2: Validate the request data
    if (!name || !email || !message) {
      console.error("Validation error: Missing fields");
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Step 3: Create the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Step 4: Send the email
    console.log("Sending email...");
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Email sent successfully");
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in API route:", error.message);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
