import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Create the directory if it doesn't exist
  const dir = path.join('/tmp', 'reply');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const replyFiles = fs.readdirSync(dir);

  const replies = replyFiles.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content); // Assuming content is stored as JSON
    return {
      id: file.replace('.json', ''), // Remove file extension from the id
      ...data,
    };
  });

  res.status(200).json(replies);
}