const db = require('../configs/db');

const findByEmail = async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0] || null;
};

const findById = async (id) => {
    const [rows] = await db.execute('SELECT id, name, email, role, created_at FROM users WHERE id = ?', [id]);
    return rows[0] || null;
};

const findAll = async () => {
    const [rows] = await db.execute('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
    return rows;
};

const create = async ({ id, name, email, password, role }) => {
    await db.execute(
        'INSERT INTO users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)',
        [id, name, email, password, role || 'customer']
    );
    return { id, name, email, role };
};

module.exports = {
    findByEmail,
    findById,
    findAll,
    create,
};
