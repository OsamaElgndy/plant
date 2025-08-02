import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const { phone  } = req.body;
  // TODO: Generate reset token, send email
  res.status(200).json({ message: 'Reset link sent!' });
}