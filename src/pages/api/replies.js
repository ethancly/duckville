import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  let replies = await kv.get('replies');
  replies = replies || [];
  console.log('replies', replies);
  res.status(200).json(replies);
}
