// api/projects.js
import { Pool } from '@neondatabase/serverless';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM projects ORDER BY id'
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
}
