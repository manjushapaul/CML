// Quick verification script for email setup
// Run: node verify-email-setup.js

require('dotenv').config({ path: '.env.local' });

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

console.log('📧 Email Configuration Check\n');
console.log('GMAIL_USER:', gmailUser ? '✅ Set' : '❌ Missing');
console.log('GMAIL_APP_PASSWORD:', gmailAppPassword ? '✅ Set' : '❌ Missing');

if (gmailAppPassword) {
  const cleanPassword = gmailAppPassword.replace(/\s+/g, '');
  console.log('Password length (after removing spaces):', cleanPassword.length);
  if (cleanPassword.length === 16) {
    console.log('✅ Password length is correct (16 characters)');
  } else {
    console.log('⚠️  Password should be 16 characters');
  }
}

if (gmailUser && gmailAppPassword) {
  console.log('\n✅ Configuration looks good!');
  console.log('📝 Next steps:');
  console.log('   1. Make sure your dev server is restarted (npm run dev)');
  console.log('   2. Test the contact form on your website');
  console.log('   3. Check the terminal for any error messages');
} else {
  console.log('\n❌ Configuration incomplete. Please check .env.local');
}





