// Environment Validation & Configuration Loader
require('dotenv').config();

const env = {
    port: Number(process.env.PORT) || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'ecommerce_db',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'ecommerce_default_secret_key_replace_in_production',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },
    corsOrigin: process.env.CORS_ORIGIN || '*',
};

module.exports = env;
