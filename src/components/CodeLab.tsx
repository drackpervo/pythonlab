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

const MOCK_ANALYSES: Record<string, string> = {
  'hello-world': "Ce code est le point d'entrée classique. Il utilise la fonction `print()` pour afficher du texte. La f-string `f\"...\"` permet d'insérer des variables directement dans une chaîne de caractères.",
  'fibonacci': "Cet exemple illustre une boucle `for` et l'assignation multiple `a, b = b, a + b`. C'est un algorithme efficace pour générer la suite de Fibonacci sans récursion.",
  'list-comp': "La compréhension de liste est une particularité puissante de Python. En une seule ligne, on filtre (avec `if`) et on transforme (avec `x**2`) une séquence de nombres.",
  'decorators-demo': "Les décorateurs sont des fonctions qui enveloppent d'autres fonctions pour modifier leur comportement. Ici, le décorateur `@debug` logue les arguments de la fonction `addition`.",
  'context-mgr': "L'instruction `with` garantit que les ressources sont correctement gérées via les méthodes `__enter__` et `__exit__`, même si une erreur survient pendant l'exécution.",
  'generators': "Les générateurs utilisent le mot-clé `yield` pour produire des valeurs une par une. Contrairement aux listes, ils ne stockent pas tout en mémoire, ce qui est idéal pour de grands volumes de données."
};

export function CodeLab() {
  const [selectedExampleId, setSelectedExampleId] = useState(PLAYGROUND_EXAMPLES[0].id);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const selectedExample = PLAYGROUND_EXAMPLES.find(e => e.id === selectedExampleId) || PLAYGROUND_EXAMPLES[0];

  const analyzeWithAI = async () => {
    if (isAnalyzing) return;
    
    setIsAnalyzing(true);
    setAiAnalysis(null);
    setError(null);
    setIsDemoMode(false);

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Check if we should use demo mode (missing or placeholder key)
    const needsDemo = !apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.includes('YOUR_');

    if (needsDemo) {
      // Simulate network delay for demo feel
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAiAnalysis(MOCK_ANALYSES[selectedExample.id] || "Désolé, aucune analyse n'est disponible pour cet exemple en mode démo.");
      setIsDemoMode(true);
      setIsAnalyzing(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `En tant qu'expert Python, analyse et explique ce code étape par étape pour un débutant. Sois concis et pédagogique. Utilise du Markdown pour la structure.
        
        CODE PYTHON :
        ${selectedExample.code}`,
        config: {
          systemInstruction: "Tu est un professeur de Python bienveillant et expert. Répond en français.",
        }
      });

      if (!response.text) {
        throw new Error("L'IA n'a pas pu générer de réponse.");
      }

      setAiAnalysis(response.text);
    } catch (err) {
      console.error("Gemini Error:", err);
      setError(err instanceof Error ? err.message : "Une erreur est survenue lors de l'analyse avec l'IA.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleExampleSelect = (id: string) => {
    setSelectedExampleId(id);
    setAiAnalysis(null);
    setError(null);
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

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 text-[10px] font-mono leading-relaxed"
            >
              <strong>Erreur IA :</strong> {error}
            </motion.div>
          )}

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
                  
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
                        <Sparkles size={16} className="text-emerald-500" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Interprétation de l'IA</span>
                    </div>
                    {isDemoMode && (
                      <div className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
                        <span className="text-[8px] font-mono font-black text-amber-500 uppercase tracking-tighter">Mode Démo</span>
                      </div>
                    )}
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
