const crypto = require('crypto');

function generateStrongSecret(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    const randomBytes = crypto.randomBytes(length);
    const randomIndex = byte => Math.floor(byte / 255 * chars.length);
    return Array.from(randomBytes, randomIndex).map(i => chars[i]).join('');
}

export const strongSecret = generateStrongSecret(64);

