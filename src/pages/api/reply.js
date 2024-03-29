import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const replies = await kv.get('replies') || [];

    const { name, reply, comment } = req.body;
    const data = JSON.stringify({ name, reply, comment });
    const id = Date.now().json;
    replies.push({id, name, reply, comment});
    if (kv.set('replies', replies)) {
        console.log("Reply saved successfully", id, name);
        res.status(201).json({ message: 'Reply saved successfully' });
    } else {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
