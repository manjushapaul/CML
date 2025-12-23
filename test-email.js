// Test script to verify Gmail SMTP connection
// Run: node test-email.js

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

console.log('📧 Testing Gmail SMTP Connection\n');

if (!gmailUser || !gmailAppPassword) {
  console.error('❌ Error: GMAIL_USER or GMAIL_APP_PASSWORD not found in .env.local');
  process.exit(1);
}

console.log('✅ Environment variables loaded');
console.log('   Gmail User:', gmailUser);
console.log('   App Password:', '*'.repeat(16));

// Remove spaces from app password
const cleanAppPassword = gmailAppPassword.replace(/\s+/g, '');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: gmailUser,
    pass: cleanAppPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

console.log('\n🔌 Testing SMTP connection...\n');

// Test connection
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Connection failed!');
    console.error('Error:', error.message);
    console.error('\n💡 Common issues:');
    console.error('   - App Password is incorrect');
    console.error('   - 2-Step Verification not enabled');
    console.error('   - Less secure app access might be needed');
    process.exit(1);
  } else {
    console.log('✅ SMTP connection verified successfully!');
    console.log('✅ Server is ready to send emails');
    console.log('\n🎉 Your email setup is working correctly!');
    console.log('   You can now test the contact form on your website.');
  }
});





