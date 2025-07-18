# Email Notification Setup Guide

## Overview
Your portfolio contact form now has email functionality! When someone submits the contact form, you'll receive an email notification AND the person will get a confirmation email.

## What Happens Now
1. **Form Submission**: User fills out contact form
2. **Database Storage**: Message is saved to PostgreSQL database
3. **Email to You**: You receive notification email at aryanshar17@gmail.com
4. **Confirmation Email**: User receives confirmation email

## Setup Instructions

### Step 1: Enable Gmail App Password
1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. At the bottom, click "App passwords"
5. Select "Mail" and your device
6. Google will generate a 16-character app password
7. Copy this password (it looks like: `abcd efgh ijkl mnop`)

### Step 2: Add Environment Variables
Add these to your `.env` file:

```env
EMAIL_USER=aryanshar17@gmail.com
EMAIL_PASS=your_16_character_app_password
```

### Step 3: For Vercel Deployment
Add the same environment variables in your Vercel dashboard:
1. Go to your project settings
2. Click "Environment Variables"
3. Add:
   - `EMAIL_USER` = `aryanshar17@gmail.com`
   - `EMAIL_PASS` = `your_16_character_app_password`

## Email Features

### Notification Email (to you)
- **Subject**: "Portfolio Contact: [User's Subject]"
- **Contains**: 
  - User's name and email
  - Subject line
  - Full message
  - Professional formatting

### Confirmation Email (to user)
- **Subject**: "Thank you for contacting me!"
- **Contains**:
  - Personalized greeting
  - Message summary
  - Your contact information
  - Links to your GitHub/LinkedIn

## Testing
1. Submit a test message through your contact form
2. Check your inbox for the notification email
3. Check the test email address for confirmation

## Important Notes
- **Works without email setup**: If you don't configure email, the form still works and saves to database
- **Fallback handling**: If email fails, the form submission still succeeds
- **Security**: Uses Gmail's secure app password system
- **Professional**: Both emails are professionally formatted with your branding

## Alternative Email Providers
If you prefer not to use Gmail, you can modify `server/emailService.ts` to use:
- **Outlook**: Change service to 'hotmail'
- **Yahoo**: Change service to 'yahoo'
- **Custom SMTP**: Replace service with host/port configuration

## Email Templates
Both email templates are customizable in `server/emailService.ts`:
- Modern HTML formatting
- Responsive design
- Professional branding
- Easy to modify content

Your portfolio now has full email functionality! Users will feel more confident reaching out knowing they'll get confirmation, and you'll be notified immediately of new contacts.