import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const { to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });

  res.status(200).json({ message: 'Email sent!' });
}