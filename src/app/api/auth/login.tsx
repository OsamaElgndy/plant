import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { phone, password }: { phone: string, password: string } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        phone,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid phone number or password' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid phone number or password' });
    }

    res.status(200).json({ message: 'Logged in!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
}