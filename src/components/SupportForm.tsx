import { useState, useEffect } from 'react';
import { Send, Heart, Coffee, Star, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { cn } from '../lib/utils';

export function SupportForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setName('');
        setMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
      
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#ffffff', '#34d399']
      });
    } catch (err) {
      console.error("Submission Error:", err);
      setError(err instanceof Error ? err.message : "Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="border-b border-[#222327] pb-8 md:pb-10 text-center sm:text-left">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none flex flex-col sm:flex-row items-center gap-4">
          ENCOURAGEMENTS
          <span className="text-emerald-500"><Heart fill="currentColor" size={40} className="animate-pulse" /></span>
        </h2>
        <p className="text-gray-500 font-mono mt-4 uppercase text-[10px] md:text-xs tracking-[0.3em]">Soutenez les développeurs du projet</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info Side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight">Pourquoi nous écrire ?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              PythonLab est un projet passionné maintained par des développeurs bénévoles. Vos messages d'encouragement, vos suggestions et vos retours sont notre carburant quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
             <div className="p-6 bg-[#111215] border border-[#222327] rounded-3xl flex items-start gap-4">
               <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                  <Coffee size={20} className="text-emerald-500" />
               </div>
               <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">Boost d'Energie</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Un simple merci nous motive à ajouter de nouveaux tutoriels chaque semaine.</p>
               </div>
             </div>

             <div className="p-6 bg-[#111215] border border-[#222327] rounded-3xl flex items-start gap-4">
               <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                  <Star size={20} className="text-blue-500" />
               </div>
               <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">Amélioration Continue</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Vos retours nous aident à corriger les bugs et à affiner le contenu pédagogique.</p>
               </div>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="bg-[#111215] border border-[#222327] p-8 rounded-[40px] shadow-2xl space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest px-1">Votre Nom (Optionnel)</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Python Lover"
                    className="w-full bg-[#0A0B0D] border border-[#222327] rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest px-1">Votre Message</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mentionnez ce que vous aimez dans le lab..."
                    rows={5}
                    className="w-full bg-[#0A0B0D] border border-[#222327] rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors text-white resize-none"
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 text-[10px] font-mono leading-relaxed"
                  >
                    <strong>Erreur de configuration :</strong> {error}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-emerald-500 text-black font-black uppercase text-xs tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all",
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-400 active:scale-95 shadow-lg shadow-emerald-500/20"
                  )}
                >
                  {isSubmitting ? (
                     <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Envoyer le message <Send size={16} /></>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/50 p-12 rounded-[40px] shadow-2xl text-center space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40 rotate-12">
                   <Heart fill="currentColor" className="text-black" size={40} />
                </div>
                <div>
                   <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">MERCI INFINIMENT !</h3>
                   <p className="text-emerald-500/70 font-mono text-[10px] mt-2 uppercase tracking-widest font-bold">Message bien reçu</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Votre message a été transmis à l'équipe. Ce genre de retour nous pousse à aller encore plus loin !
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-white/50 hover:text-white text-[10px] font-mono font-bold uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto"
                >
                  <MessageSquare size={14} /> Envoyer un autre mot
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
