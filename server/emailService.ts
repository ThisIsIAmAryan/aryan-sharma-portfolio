import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Create transporter using Gmail (you can change this to other providers)
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendContactEmail(data: EmailData): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aryanshar17@gmail.com', // Your email address
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #334155;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              This email was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendConfirmationEmail(data: EmailData): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Thank you for reaching out!</h2>
          
          <p style="color: #334155; line-height: 1.6;">Hi ${data.name},</p>
          
          <p style="color: #334155; line-height: 1.6;">
            Thank you for contacting me through my portfolio website. I've received your message about "${data.subject}" and will get back to you as soon as possible.
          </p>
          
          <p style="color: #334155; line-height: 1.6;">
            I typically respond within 24-48 hours. If you have any urgent questions, feel free to reach out to me directly at aryanshar17@gmail.com.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong> ${data.message}</p>
          </div>
          
          <p style="color: #334155; line-height: 1.6; margin-top: 20px;">
            Best regards,<br>
            <strong>Aryan Sharma</strong><br>
            Software Developer
          </p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              Connect with me: 
              <a href="https://github.com/ThisIsIAmAryan" style="color: #2563eb;">GitHub</a> | 
              <a href="https://www.linkedin.com/in/thisisiamaryan/" style="color: #2563eb;">LinkedIn</a>
            </p>
          </div>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }
}

export const emailService = new EmailService();