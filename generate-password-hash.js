#!/usr/bin/env node

/**
 * Utility script to generate SHA-256 hash for password protection
 * 
 * Usage: node generate-password-hash.js <your-password>
 * 
 * This will output the hash that you can use in index.html
 * Replace the CORRECT_PASSWORD_HASH constant with the generated hash
 */

const crypto = require('crypto');

const password = process.argv[2];

if (!password) {
    console.error('Usage: node generate-password-hash.js <your-password>');
    process.exit(1);
}

// Generate SHA-256 hash
const hash = crypto.createHash('sha256').update(password).digest('hex');

console.log('\n✅ Password hash generated:');
console.log(hash);
console.log('\n📝 Copy this hash and replace CORRECT_PASSWORD_HASH in index.html');
console.log('   (Search for: const CORRECT_PASSWORD_HASH = ...)\n');

