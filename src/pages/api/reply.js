import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, reply, comment } = req.body;

    // Create the directory if it doesn't exist
    const dir = path.join(process.cwd(), 'reply');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // Write data to a file in JSON format
    const data = JSON.stringify({ name, reply, comment });
    const filePath = path.join(dir, `${Date.now()}.json`);
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Reply saved successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
