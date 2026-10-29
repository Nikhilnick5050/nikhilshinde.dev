import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'guestbook'

let client
let clientPromise

if (!global._mongoClientPromise) {
  client = new MongoClient(uri)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default async function handler(req, res) {
  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI is not set' })
  }

  try {
    const client = await clientPromise
    const db = client.db(dbName)
    const col = db.collection('entries')

    if (req.method === 'GET') {
      const entries = await col.find({}).sort({ createdAt: -1 }).limit(50).toArray()
      return res.status(200).json(entries)
    }

    if (req.method === 'POST') {
      const { name, email, message } = req.body || {}
      if (!message || !message.trim()) {
        return res.status(400).json({ error: 'Message is required' })
      }
      const doc = {
        name: (name || '').trim(),
        email: (email || '').trim(),
        message: message.trim(),
        createdAt: new Date(),
      }
      await col.insertOne(doc)
      return res.status(201).json(doc)
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
}