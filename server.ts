import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/send-email", async (req, res) => {
    const { name, message } = req.body;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("DEBUG: RESEND_API_KEY is missing in environment");
      return res.status(500).json({ 
        error: "Configuration manquante : RESEND_API_KEY n'est pas définie dans les secrets du projet." 
      });
    }

    const resend = new Resend(apiKey);

    if (!message) {
      return res.status(400).json({ error: "Le message est requis." });
    }

    try {
      console.log(`DEBUG: Tentative d'envoi d'un email via Resend pour: ${name || "Anonyme"}`);
      
      const { data, error } = await resend.emails.send({
        from: "PythonLab <onboarding@resend.dev>",
        to: ["kirumapervez@gmail.com"],
        subject: `Encouragements PythonLab - ${name || "Un utilisateur"}`,
        text: `Message de ${name || "Anonyme"}:\n\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 12px;">
            <h2 style="color: #10b981;">Nouveau message d'encouragement !</h2>
            <p><strong>Expéditeur:</strong> ${name || "Anonyme"}</p>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin-top: 10px;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
            <p style="font-size: 10px; color: #999; margin-top: 20px;">Envoyé via PythonLab Bot</p>
          </div>
        `,
      });

      if (error) {
        console.error("DEBUG: Resend API Error:", error);
        return res.status(400).json({ 
          error: `Erreur Resend : ${error.message}. Assurez-vous d'envoyer à l'adresse enregistrée sur Resend si vous utilisez le domaine gratuit.` 
        });
      }

      console.log("DEBUG: Email envoyé avec succès:", data);
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("DEBUG: Server Exception:", err);
      res.status(500).json({ error: "Une erreur technique est survenue lors de l'envoi." });
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
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  return app;
}

const appPromise = startServer();
export default appPromise;
