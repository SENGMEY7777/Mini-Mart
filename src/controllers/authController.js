const authService = require('../services/authService');

const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);
        return res.status(201).json({ success: true, message: 'User registered successfully', data: result });
    } catch (error) {
        return next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);
        return res.status(200).json({ success: true, message: 'Login successful', data: result });
    } catch (error) {
        return next(error);
    }
};

const getProfile = async (req, res, next) => {
    try {
        const user = await authService.getProfile(req.user?.id);
        return res.status(200).json({ success: true, data: user });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    register,
    login,
    getProfile,
    getAll: async (req, res, next) => {
        try {
            const users = await authService.getAllUsers();
            return res.status(200).json({ success: true, data: users });
        } catch (error) {
            return next(error);
        }
    },
    getById: getProfile,
    create: register,
    update: async (req, res) => res.json({ success: true }),
    delete: async (req, res) => res.json({ success: true }),
};
