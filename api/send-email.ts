import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  // Configurer les headers CORS si nécessaire
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, message } = req.body;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      error: "Configuration manquante sur Vercel : La variable RESEND_API_KEY n'est pas définie dans les Environment Variables." 
    });
  }

  const resend = new Resend(apiKey);

  if (!message) {
    return res.status(400).json({ error: "Le message est requis." });
  }

  try {
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
      return res.status(400).json({ 
        error: `Erreur Resend : ${error.message}. Vérifiez que vous envoyez à l'adresse autorisée (votre email de compte Resend).` 
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Vercel Function Error:", err);
    return res.status(500).json({ error: "Une erreur technique est survenue sur le serveur de Vercel." });
  }
}
