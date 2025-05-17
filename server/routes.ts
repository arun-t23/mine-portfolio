import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using zod schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Add timestamp
      const contactData = {
        ...validatedData,
        createdAt: Math.floor(Date.now() / 1000)
      };
      
      // Save contact form to storage
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to submit contact form",
        error: String(error)
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch contacts",
        error: String(error)
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
