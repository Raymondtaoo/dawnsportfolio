const express = require("express");
const { Resend } = require("resend");
const cors = require('cors');
require("dotenv").config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middlewares
app.use(cors());
app.use(express.json()); // This allows us to parse JSON bodies in POST requests.

// Routes
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Construct your email content here.
  const emailContent = `
    <p>You have a new message from:</p>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `;

  // Use the Resend API to send the email.
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resending.dev',
      to: '@gmail.com',
      subject: `Portfolio Contact Submission from ${name}`,
      html: emailContent,
    });

    if (error) throw new Error(error);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
