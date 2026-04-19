import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Home, RefreshCw, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface NotFoundProps {
  onGoHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-[#151619] border border-[#2A2B2F] rounded-3xl overflow-hidden shadow-2xl">
          {/* Window Header */}
          <div className="bg-[#1A1B1E] px-6 py-4 border-b border-[#2A2B2F] flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
              <Terminal size={14} />
              <span>Python Interpreter - Error</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="font-mono text-sm md:text-base mb-8 space-y-2">
              <p className="text-gray-500">Traceback (most recent call last):</p>
              <p className="pl-4 text-gray-300">File "<span className="text-emerald-500">python_lab/router.py</span>", line 404, in <span className="text-blue-400">handle_request</span></p>
              <p className="pl-4 text-rose-400 font-bold">RouteNotFoundError: The requested URL was not found on this server.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-dashed border-emerald-500/10 rounded-full flex items-center justify-center"
                >
                  <AlertCircle size={48} className="text-rose-500/20" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <h1 className="text-7xl font-black text-white tracking-tighter">404</h1>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Oops! Vous êtes perdu dans le code.</h2>
                <p className="text-gray-400 max-w-sm">La page que vous recherchez semble avoir été déplacée ou n'a jamais existé dans notre laboratoire.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button 
                  onClick={onGoHome}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-black font-black rounded-2xl hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/20 uppercase tracking-widest text-xs"
                >
                  <Home size={18} />
                  Retour au Lab
                </button>
                <button 
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest text-xs"
                >
                  <RefreshCw size={18} />
                  Actualiser
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Quote */}
        <p className="mt-8 text-center text-gray-600 font-mono text-[10px] uppercase tracking-[0.4em]">
          "Beautiful is better than ugly." - The Zen of Python
        </p>
      </motion.div>
    </div>
  );
};
