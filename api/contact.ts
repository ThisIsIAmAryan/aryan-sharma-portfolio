import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from "zod";
import { insertContactSchema } from "../shared/schema.js";
import { EmailService } from "../server/emailService.js";
import { createContact } from "../server/storage.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const contactData = insertContactSchema.parse(req.body);
    
    // Save to database
    const result = await createContact(contactData);
    
    // Send email
    const emailService = new EmailService();
    await emailService.sendContactEmail(contactData);
    
    res.json({ message: "Message sent successfully", result });
  } catch (error: any) {
    console.error("Contact submission error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: "Invalid input", 
        details: error.errors 
      });
    }
    
    res.status(500).json({ 
      error: "Failed to send message",
      details: error.message 
    });
  }
}
