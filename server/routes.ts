import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { insertContactSchema } from "@shared/schema.js";
import { emailService } from "./emailService.js";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Save to database
      const contact = await storage.createContact(validatedData);
      
      // Send emails if email credentials are configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          // Send notification email to you
          await emailService.sendContactEmail(validatedData);
          
          // Send confirmation email to the sender
          await emailService.sendConfirmationEmail(validatedData);
        } catch (emailError) {
          console.error('Failed to send email:', emailError);
          // Continue with success response even if email fails
        }
      }
      
      res.json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes if needed)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
