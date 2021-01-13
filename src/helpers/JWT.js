const jwt = require('jsonwebtoken');
const RefreshToken = require("../models/RefreshToken");
const { v4: uuidv4 } = require('uuid');


function GenerateToken(userId) {
    const accessToken = jwt.sign({ id: userId }, "secret", { expiresIn: '15m' });
    const date = new Date();
    const refreshToken = new RefreshToken({
        user: userId,
        expireDate: new Date(date.setMonth(date.getMonth() + 1))
    });

    refreshToken.save().catch( e => e);

    return { accessToken, refreshToken: refreshToken.id }
}

module.exports = { GenerateToken };