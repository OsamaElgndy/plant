import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { phone, password } : { phone: string, password: string } = req.body;
  res.status(200).json({ message: 'Logged in!' });
}