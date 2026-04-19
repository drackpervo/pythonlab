import { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Info, 
  ChevronRight, 
  BrainCircuit, 
  MessageSquareText, 
  ArrowRight,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI } from "@google/genai";
import { PLAYGROUND_EXAMPLES } from '../constants';
import { cn } from '../lib/utils';

export function CodeLab() {
  const [selectedExampleId, setSelectedExampleId] = useState(PLAYGROUND_EXAMPLES[0].id);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const selectedExample = PLAYGROUND_EXAMPLES.find(e => e.id === selectedExampleId) || PLAYGROUND_EXAMPLES[0];

  const analyzeWithAI = async () => {
    if (isAnalyzing) return;
    
    setIsAnalyzing(true);
    setAiAnalysis(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `En tant qu'expert Python, analyse et explique ce code étape par étape pour un débutant. Sois concis et pédagogique. Utilise du Markdown pour la structure.
        
        CODE PYTHON :
        ${selectedExample.code}`,
        config: {
          systemInstruction: "Tu est un professeur de Python bienveillant et expert. Répond en français.",
        }
      });

      setAiAnalysis(response.text);
    } catch (err) {
      console.error("Gemini Error:", err);
      setAiAnalysis("Désolé, une erreur est survenue lors de l'analyse avec l'IA. Vérifiez votre connexion.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleExampleSelect = (id: string) => {
    setSelectedExampleId(id);
    setAiAnalysis(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="border-b border-[#222327] pb-8 md:pb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">LAB D'EXEMPLES</h2>
        <p className="text-gray-500 font-mono mt-4 uppercase text-[10px] md:text-xs tracking-[0.3em]">Bibliothèque de Code & Assistance IA</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation - Examples List */}
        <aside className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-2 mb-6 px-2">
            <Code2 size={18} className="text-emerald-500" />
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Index des Exemples</span>
          </div>
          
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {PLAYGROUND_EXAMPLES.map((example) => (
              <button
                key={example.id}
                onClick={() => handleExampleSelect(example.id)}
                className={cn(
                  "w-full text-left p-4 rounded-2xl border transition-all relative group",
                  selectedExampleId === example.id
                    ? "bg-emerald-500/10 border-emerald-500/40 text-white translate-x-1"
                    : "bg-[#111215] border-[#222327] text-gray-400 hover:border-gray-700 hover:bg-[#16171B]"
                )}
              >
                {selectedExampleId === example.id && (
                  <motion.div 
                    layoutId="active-example-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-full"
                  />
                )}
                <h4 className="font-bold text-xs uppercase tracking-tight mb-1">{example.title}</h4>
                <p className="text-[10px] text-gray-500 line-clamp-1 group-hover:text-gray-400 transition-colors">
                  {example.description}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
            <div className="flex items-center gap-2 mb-3">
               <Bot size={16} className="text-emerald-500" />
               <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest">Assistant Flash</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed italic">
              "Sélectionnez un exemple et demandez à l'IA de l'analyser pour une compréhension profonde."
            </p>
          </div>
        </aside>

        {/* Content - Code Viewer and AI Interpretation */}
        <main className="lg:col-span-8 space-y-6">
          {/* Code Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111215] border border-[#222327] p-6 rounded-3xl shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{selectedExample.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{selectedExample.description}</p>
            </div>
            <button
              onClick={analyzeWithAI}
              disabled={isAnalyzing}
              className={cn(
                "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all",
                isAnalyzing 
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                  : "bg-emerald-500 text-black hover:bg-emerald-400 active:scale-95 shadow-lg shadow-emerald-500/20"
              )}
            >
              {isAnalyzing ? (
                <div className="w-4 h-4 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
              ) : (
                <BrainCircuit size={18} />
              )}
              {isAnalyzing ? "Analyse..." : "Expliquer avec l'IA"}
            </button>
          </div>

          {/* Viewer Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Code Panel */}
            <div className="bg-[#0A0B0D] border border-[#222327] rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-10 bg-[#1A1B1E] border-b border-[#222327] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-500/40" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                </div>
                <span className="text-[9px] font-mono font-bold text-gray-600 uppercase tracking-widest ml-2">code_source.py</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-emerald-500/90 leading-relaxed whitespace-pre font-medium">
                  <code>{selectedExample.code}</code>
                </pre>
              </div>
            </div>

            {/* AI Result Panel */}
            <AnimatePresence mode="wait">
              {aiAnalysis && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-[#111215] border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <MessageSquareText size={120} className="text-emerald-500" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
                      <Sparkles size={16} className="text-emerald-500" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Interprétation de l'IA</span>
                  </div>

                  <div className="prose prose-invert prose-emerald max-w-none text-gray-300 text-sm leading-relaxed font-sans">
                    <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!aiAnalysis && !isAnalyzing && (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-[#222327] rounded-3xl">
                <div className="w-16 h-16 bg-[#111215] rounded-full flex items-center justify-center text-gray-700">
                  <BrainCircuit size={32} />
                </div>
                <div>
                   <h4 className="text-gray-400 font-bold text-sm">Prêt pour l'analyse</h4>
                   <p className="text-gray-600 text-xs mt-1">L'IA est prête à décortiquer ce code pour vous.</p>
                </div>
                <button 
                  onClick={analyzeWithAI}
                  className="text-emerald-500 text-[10px] font-mono font-bold uppercase tracking-widest hover:text-emerald-400 flex items-center gap-2 transition-colors"
                >
                  Démarrer l'analyse <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
