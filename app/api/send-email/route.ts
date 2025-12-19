import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Helper function to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if Gmail credentials are configured
    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail credentials missing:', {
        hasUser: !!gmailUser,
        hasPassword: !!gmailAppPassword,
      })
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at manjushapaul39@gmail.com' },
        { status: 500 }
      )
    }

    // Create transporter using Gmail SMTP
    // Remove spaces from app password if present (Gmail app passwords sometimes have spaces)
    const cleanAppPassword = gmailAppPassword.replace(/\s+/g, '')
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: gmailUser,
        pass: cleanAppPassword, // This should be an App Password, not your regular Gmail password
      },
      tls: {
        rejectUnauthorized: false, // For development
      },
    })
    
    // Verify connection configuration before sending
    try {
      await transporter.verify()
      console.log('Gmail SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      const errorMsg = verifyError instanceof Error ? verifyError.message : String(verifyError)
      if (errorMsg.includes('Invalid login') || errorMsg.includes('authentication')) {
        throw new Error('Invalid Gmail credentials. Please check your Gmail App Password.')
      } else if (errorMsg.includes('ENOTFOUND') || errorMsg.includes('ECONNREFUSED')) {
        throw new Error('Unable to connect to Gmail SMTP server. Please check your internet connection.')
      }
      throw new Error('Failed to connect to Gmail SMTP server. Please check your credentials.')
    }

    // Escape HTML to prevent XSS attacks
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // Send email using Gmail
    const mailOptions = {
      from: `"Code Meld Labs" <${gmailUser}>`,
      to: 'manjushapaul39@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 4px solid #1e293b;">
              ${safeMessage}
            </div>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            This email was sent from the Code Meld Labs contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the Code Meld Labs contact form.
      `.trim(),
    }

    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email API error:', error)
    
    // Provide more detailed error information
    let errorMessage = 'Failed to send email. Please try again later.'
    if (error instanceof Error) {
      console.error('Error details:', error.message)
      // Don't expose sensitive details to client, but log them
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check your Gmail App Password.'
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Unable to connect to email server. Please check your internet connection.'
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
