"use server"

import nodemailer from "nodemailer"

export async function sendMail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if(!name || !email || !message) {
    return;
  }

  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
  
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    }
  })

  try {
    const result = await transport.sendMail({
      from: email,
      to: "mahmoudfarghly519@gmail.com",
      subject: "Personal Portofolio Contact",
      html: `
        <h1>Hello Mahmoud, You got new message!</h1>
        <p style='font-size: 17px'>
          <b>Name:</b> ${name}
        </p>
        <p style='font-size: 17px'>
          <b>Email Address:</b> ${email}
        </p>
        <p style='font-size: 17px'>
          <b>Message:</b> ${message}
        </p>
      `
    })

    if(result.accepted) {
      return {success: true, message: "Message sent successfully."}
    }
  } catch(error) {
    return {error: true, message: "Failed to send email please try again later."}
  }
}
