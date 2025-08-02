import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const { query } = req.query;
  // TODO: Search in database
  res.status(200).json({ results: [] });
}