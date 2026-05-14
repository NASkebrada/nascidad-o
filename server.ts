import 'dotenv/config';
import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import multer from "multer";
import { createServer as createViteServer } from "vite";

const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/submit-report", upload.fields([{ name: 'photo' }, { name: 'audio' }]), async (req: any, res) => {
    console.log("--- DEBUG: Received request to /api/submit-report ---");
    console.log("Body:", req.body);
    console.log("Files keys:", req.files ? Object.keys(req.files) : "None");
    
    const { category, description, location } = req.body;
    const photo = req.files && req.files.photo ? req.files.photo[0] : null;
    const audio = req.files && req.files.audio ? req.files.audio[0] : null;

    // Check for SMTP config
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("DEBUG: SMTP config missing");
      return res.status(500).json({ error: "SMTP configuration missing" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      const attachments = [];
      if (photo) attachments.push({ filename: photo.originalname, content: photo.buffer });
      if (audio) attachments.push({ filename: audio.originalname, content: audio.buffer });
      
      console.log("DEBUG: Attempting to send email...");
      await transporter.sendMail({
        from: `"${process.env.SMTP_USER}" <${process.env.SMTP_USER}>`,
        to: "kebradanas@gmail.com",
        subject: `Nova denúncia: ${category}`,
        text: `Categoria: ${category}\nDescrição: ${description}\nLocalização: ${location}`,
        attachments,
      });
      console.log("DEBUG: Email sent successfully!");
      res.json({ success: true });
    } catch (error: any) {
      console.error("DEBUG: Error sending email:", error);
      res.status(500).json({ error: error.message || "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
