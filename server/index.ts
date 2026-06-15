import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || (isProd ? 3000 : 3001);
const MESSAGES_FILE = path.join(__dirname, 'data', 'messages.json');

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  createdAt: string;
}

function ensureDataDir() {
  const dir = path.dirname(MESSAGES_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, '[]', 'utf-8');
  }
}

function readMessages(): Message[] {
  ensureDataDir();
  try {
    return JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8')) as Message[];
  } catch {
    return [];
  }
}

function writeMessages(messages: Message[]) {
  ensureDataDir();
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');
}

const app = express();

app.use(express.json({ limit: '32kb' }));

if (!isProd) {
  app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (_req.method === 'OPTIONS') {
      res.sendStatus(204);
      return;
    }
    next();
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/messages', (_req, res) => {
  const messages = readMessages();
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { name, email, subject, text } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !text?.trim()) {
    res.status(400).json({ error: 'name, email and text are required' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(String(email).trim())) {
    res.status(400).json({ error: 'invalid email' });
    return;
  }

  const newMessage: Message = {
    id: `msg-${Date.now()}`,
    name: String(name).trim().slice(0, 100),
    email: String(email).trim().slice(0, 150),
    subject: String(subject || 'General Inquiry').trim().slice(0, 200),
    text: String(text).trim().slice(0, 2000),
    createdAt: new Date().toISOString(),
  };

  const messages = [newMessage, ...readMessages()];
  writeMessages(messages);
  res.status(201).json(newMessage);
});

app.delete('/api/messages/:id', (req, res) => {
  const messages = readMessages();
  const filtered = messages.filter((m) => m.id !== req.params.id);

  if (filtered.length === messages.length) {
    res.status(404).json({ error: 'message not found' });
    return;
  }

  writeMessages(filtered);
  res.json({ success: true });
});

app.delete('/api/messages', (_req, res) => {
  writeMessages([]);
  res.json({ success: true });
});

if (isProd) {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT} (${isProd ? 'production' : 'development'})`);
});
