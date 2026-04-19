import { useState } from 'react';
import { 
  BookOpen, 
  Library, 
  GraduationCap, 
  Terminal as TerminalIcon, 
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Search,
  ExternalLink,
  ClipboardCheck,
  Award,
  Play,
  BrainCircuit,
  Heart,
  Code2,
  ArrowUpDown,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import confetti from 'canvas-confetti';

import { TUTORIALS, BOOKS, QUIZZES, PLAYGROUND_EXAMPLES } from './constants';
import { Tutorial, Book, Quiz, PlaygroundExample } from './types';
import { QuizComponent } from './components/QuizComponent';
import { CodeLab } from './components/CodeLab';
import { SupportForm } from './components/SupportForm';
import { NotFound } from './components/NotFound';
import { cn } from './lib/utils';

type View = 'dashboard' | 'tutorials' | 'books' | 'quizzes' | 'codelab' | 'support' | '404';

export default function App() {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [tutorialFilter, setTutorialFilter] = useState<'Tous' | 'Débutant' | 'Intermédiaire' | 'Avancé'>('Tous');
  const [quizSort, setQuizSort] = useState<'default' | 'title' | 'level'>('default');
  const [quizFilter, setQuizFilter] = useState<'Tous' | 'Débutant' | 'Intermédiaire' | 'Avancé'>('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  // Simple routing logic to handle "404" or unknown paths
  useState(() => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const validPaths = ['tutorials', 'books', 'quizzes', 'codelab', 'support', ''];
    if (path && !validPaths.includes(path)) {
      setActiveView('404');
    } else if (path) {
      setActiveView(path as View);
    }
  });

  const handleTutorialComplete = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#34d399', '#059669']
    });
  };

  const filteredTutorials = (tutorialFilter === 'Tous' 
    ? TUTORIALS 
    : TUTORIALS.filter(t => t.level === tutorialFilter)
  ).filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredQuizzes = (quizFilter === 'Tous' 
    ? QUIZZES 
    : QUIZZES.filter(q => q.level === quizFilter)
  ).filter(q => 
    q.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.description.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (quizSort === 'title') return a.title.localeCompare(b.title);
    if (quizSort === 'level') return a.level.localeCompare(b.level);
    return 0;
  });

  return (
    <div className="flex h-screen bg-[#0A0B0D] text-gray-200 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <aside 
        className={cn(
          "bg-[#111215] border-r border-[#222327] transition-all duration-300 flex flex-col z-50 fixed inset-y-0 left-0 md:relative",
          isSidebarOpen ? "w-72 translate-x-0" : "w-72 -translate-x-full md:w-20 md:translate-x-0"
        )}
      >
        <div className="p-6 md:p-6 flex items-center justify-between">
          <div className={cn("flex items-center gap-3", !isSidebarOpen && "md:hidden")}>
            <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 rotate-3 group-hover:rotate-0 transition-transform">
              <Code2 className="text-black w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white">Python<span className="text-emerald-500">Lab</span></span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg text-gray-400"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <NavItem 
            active={activeView === 'dashboard'} 
            onClick={() => { setActiveView('dashboard'); if (window.innerWidth < 768) setIsSidebarOpen(false); }} 
            icon={<Sparkles size={20} />} 
            label="Dashboard Lab" 
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            active={activeView === 'tutorials'} 
            onClick={() => { setActiveView('tutorials'); setSelectedTutorial(null); if (window.innerWidth < 768) setIsSidebarOpen(false); }} 
            icon={<GraduationCap size={20} />} 
            label="Formations" 
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            active={activeView === 'quizzes'} 
            onClick={() => { setActiveView('quizzes'); setSelectedQuiz(null); if (window.innerWidth < 768) setIsSidebarOpen(false); }} 
            icon={<Award size={20} />} 
            label="Quiz Lab" 
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            active={activeView === 'codelab'} 
            onClick={() => { setActiveView('codelab'); if (window.innerWidth < 768) setIsSidebarOpen(false); }} 
            icon={<BrainCircuit size={20} />} 
            label="Lab d'Exemples" 
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            active={activeView === 'books'} 
            onClick={() => { setActiveView('books'); if (window.innerWidth < 768) setIsSidebarOpen(false); }} 
            icon={<Library size={20} />} 
            label="Bibliothèque" 
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            active={activeView === 'support'} 
            onClick={() => { setActiveView('support'); if (window.innerWidth < 768) setIsSidebarOpen(false); }} 
            icon={<Heart size={20} />} 
            label="Soutenir le Lab" 
            collapsed={!isSidebarOpen}
          />
        </nav>

        <div className="p-4 border-t border-[#222327]">
          {isSidebarOpen && (
            <div className="flex items-center gap-3 px-3 py-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider">Expert System Active</span>
            </div>
          )}
        </div>
      </aside>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header / Search */}
        <header className="h-16 border-b border-[#222327] bg-[#111215]/50 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 z-40">
           <div className="flex items-center gap-4 text-sm text-gray-500">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-white/5 rounded-lg text-gray-400 md:hidden"
              >
                <Menu size={20} />
              </button>
              <span className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                 Python Academy
              </span>
           </div>
           <div className="flex items-center gap-4">
              <div className="relative group hidden md:block">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
                 <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Rechercher un module..." 
                   className="bg-[#1A1B1E] border border-[#2A2B2F] rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-emerald-500/50 transition-all w-64 text-white"
                 />
              </div>
           </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeView === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                className="max-w-6xl mx-auto space-y-12 pb-10"
              >
                <div className="space-y-4 pt-4 md:pt-10">
                   <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white mb-2 leading-[0.85] uppercase">
                     L'excellence<br/><span className="text-emerald-500">Python</span>
                   </h1>
                   <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                     Devenez un expert du langage avec nos parcours d'apprentissage structurés, nos quiz interactifs et une bibliothèque des meilleurs ouvrages.
                   </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="bg-[#151619] border border-[#2A2B2F] p-6 md:p-10 rounded-3xl relative overflow-hidden group shadow-2xl">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity translate-x-4 -translate-y-4">
                        <Award size={120} />
                     </div>
                     <div className="relative z-10">
                        <div className="text-emerald-500 text-xs font-mono font-bold mb-4 md:mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                           Challenge
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">Testez vos<br/>compétences</h2>
                        <p className="text-gray-400 mb-6 md:mb-8 max-w-xs text-base md:text-lg">Validez vos acquis avec nos quiz interactifs par niveaux.</p>
                        <button 
                          onClick={() => { setActiveView('quizzes'); if (window.innerWidth < 768) setIsSidebarOpen(false); }}
                          className="w-full sm:w-auto bg-emerald-500 text-black font-extrabold px-8 md:px-10 py-3 md:py-4 rounded-2xl hover:bg-emerald-400 transition-all active:scale-95 shadow-2xl shadow-emerald-500/20 uppercase tracking-widest text-xs md:text-sm"
                        >
                          Démarrer
                        </button>
                     </div>
                  </div>

                  <div className="bg-[#151619] border border-[#2A2B2F] p-6 md:p-10 rounded-3xl relative overflow-hidden group shadow-2xl">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity translate-x-4 -translate-y-4">
                        <BookOpen size={120} />
                     </div>
                     <div className="relative z-10">
                        <div className="text-blue-500 text-xs font-mono font-bold mb-4 md:mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                           Savoir
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">Parcours de<br/>Formation</h2>
                        <p className="text-gray-400 mb-6 md:mb-8 max-w-xs text-base md:text-lg">Apprenez étape par étape. Des variables aux patterns.</p>
                        <button 
                          onClick={() => { setActiveView('tutorials'); if (window.innerWidth < 768) setIsSidebarOpen(false); }}
                          className="w-full sm:w-auto bg-white text-black font-extrabold px-8 md:px-10 py-3 md:py-4 rounded-2xl hover:bg-gray-200 transition-all active:scale-95 shadow-2xl shadow-white/10 uppercase tracking-widest text-xs md:text-sm"
                        >
                          Explorer
                        </button>
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <StatCard icon={<GraduationCap className="text-emerald-400" />} label="Formations" value={TUTORIALS.length.toString()} />
                   <StatCard icon={<Award className="text-amber-400" />} label="Quiz disponibles" value={QUIZZES.length.toString()} />
                   <StatCard icon={<Library className="text-blue-400" />} label="Ouvrages de référence" value={BOOKS.length.toString()} />
                </div>
              </motion.div>
            )}

            {activeView === 'tutorials' && (
              <motion.div 
                key="tutorials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto space-y-8 md:space-y-12 pb-10"
              >
                {selectedTutorial ? (
                  <div className="bg-[#111215] border border-[#2A2B2F] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="p-6 md:p-12">
                      <button 
                        onClick={() => setSelectedTutorial(null)}
                        className="mb-8 md:mb-10 text-xs text-emerald-500 hover:text-emerald-400 font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"
                      >
                        <ChevronRight className="rotate-180 w-4 h-4" /> Retour
                      </button>
                      
                      <div className="mb-8 md:mb-12">
                         <div className="flex items-center gap-3 mb-4">
                            <span className={cn(
                              "text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                              selectedTutorial.level === 'Débutant' ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                              selectedTutorial.level === 'Intermédiaire' ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                              "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                            )}>
                              {selectedTutorial.level}
                            </span>
                         </div>
                         <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 md:mb-6">{selectedTutorial.title}</h2>
                         <p className="text-gray-400 text-base md:text-lg leading-relaxed">{selectedTutorial.description}</p>
                      </div>

                      <div className="prose prose-invert prose-emerald max-w-none prose-h3:text-white prose-p:text-gray-300 prose-code:text-emerald-300 prose-pre:bg-[#0A0B0D] prose-pre:border prose-pre:border-[#222327] prose-pre:rounded-2xl text-sm md:text-base">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {selectedTutorial.content}
                        </ReactMarkdown>
                      </div>

                      <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-[#222327] flex flex-col sm:flex-row items-center justify-between gap-6">
                         <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500 font-medium">
                            <Award className="w-5 h-5 text-emerald-500" />
                            <span>Complétez ce module pour gagner 10 XP</span>
                         </div>
                         <button 
                           onClick={handleTutorialComplete}
                           className="w-full sm:w-auto bg-emerald-500 text-black px-8 md:px-10 py-3 md:py-4 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
                         >
                           Valider le module
                         </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8 md:space-y-12">
                     <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#222327] pb-8 md:pb-10">
                        <div>
                           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">COURS</h2>
                           <p className="text-gray-500 font-mono mt-3 uppercase text-[10px] md:text-xs tracking-[0.3em]">Formation continue par niveau</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {['Tous', 'Débutant', 'Intermédiaire', 'Avancé'].map((level) => (
                             <button
                               key={level}
                               onClick={() => setTutorialFilter(level as any)}
                               className={cn(
                                 "px-4 md:px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border",
                                 tutorialFilter === level 
                                   ? "bg-white text-black border-white" 
                                   : "bg-transparent border-white/10 text-gray-500 hover:text-white hover:border-white/20"
                               )}
                             >
                               {level}
                             </button>
                           ))}
                        </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {filteredTutorials.map((t) => (
                          <TutorialCard 
                            key={t.id} 
                            tutorial={t} 
                            onClick={() => setSelectedTutorial(t)} 
                          />
                        ))}
                     </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeView === 'quizzes' && (
              <motion.div 
                key="quizzes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto space-y-8 md:space-y-12 pb-10"
              >
                {selectedQuiz ? (
                  <QuizComponent quiz={selectedQuiz} onClose={() => setSelectedQuiz(null)} />
                ) : (
                  <div className="space-y-8 md:space-y-12">
                     <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#222327] pb-8 md:pb-10">
                        <div>
                           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">LABO QUIZ</h2>
                           <p className="text-gray-500 font-mono mt-3 uppercase text-[10px] md:text-xs tracking-[0.3em]">Validation des acquis</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                           <div className="flex items-center gap-2 bg-[#111215] border border-white/5 p-1 rounded-xl">
                              {['Tous', 'Débutant', 'Avancé'].map((level) => (
                                <button
                                  key={level}
                                  onClick={() => setQuizFilter(level as any)}
                                  className={cn(
                                    "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                                    quizFilter === level 
                                      ? "bg-emerald-500 text-black" 
                                      : "text-gray-500 hover:text-white"
                                  )}
                                >
                                  {level}
                                </button>
                              ))}
                           </div>
                           <div className="flex items-center gap-2 bg-[#111215] border border-white/5 p-1 rounded-xl">
                              <button
                                onClick={() => setQuizSort('default')}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                                  quizSort === 'default' ? "bg-white text-black" : "text-gray-500 hover:text-white"
                                )}
                              >
                                Défaut
                              </button>
                              <button
                                onClick={() => setQuizSort('title')}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                                  quizSort === 'title' ? "bg-white text-black" : "text-gray-500 hover:text-white"
                                )}
                              >
                                Titre
                              </button>
                               <button
                                onClick={() => setQuizSort('level')}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                                  quizSort === 'level' ? "bg-white text-black" : "text-gray-500 hover:text-white"
                                )}
                              >
                                Niveau
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {filteredQuizzes.map((quiz) => (
                          <div 
                            key={quiz.id}
                            className="bg-[#151619] border border-[#2A2B2F] p-6 md:p-8 rounded-3xl hover:border-emerald-500/40 transition-all group cursor-pointer relative overflow-hidden"
                            onClick={() => setSelectedQuiz(quiz)}
                          >
                             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <ClipboardCheck size={60} />
                             </div>
                             <div className="relative z-10">
                                <div className={cn(
                                  "text-[10px] font-mono font-bold uppercase tracking-widest mb-3 md:mb-4 inline-block px-2 py-1 rounded border",
                                  quiz.level === 'Débutant' ? "text-blue-400 border-blue-400/20" : "text-rose-400 border-rose-400/20"
                                )}>
                                   {quiz.level}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{quiz.title}</h3>
                                <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">{quiz.description}</p>
                                <div className="flex items-center justify-between">
                                   <span className="text-[10px] text-gray-600 font-mono">{quiz.questions.length} questions</span>
                                   <div className="bg-emerald-500 text-black p-2 md:p-3 rounded-xl group-hover:scale-110 transition-transform">
                                      <Play size={14} fill="currentColor" />
                                   </div>
                                </div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeView === 'codelab' && (
              <motion.div 
                key="codelab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <CodeLab />
              </motion.div>
            )}

            {activeView === 'books' && (
              <motion.div 
                key="books"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto space-y-8 md:space-y-12 pb-10"
              >
                <div className="border-b border-[#222327] pb-8 md:pb-10">
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">BIBLIOTHÈQUE</h2>
                  <p className="text-gray-500 font-mono mt-4 uppercase text-[10px] md:text-xs tracking-[0.3em]">Ouvrages fondamentaux sélectionnés</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                   {BOOKS.map((book) => (
                     <BookCard key={book.id} book={book} />
                   ))}
                </div>
              </motion.div>
            )}

            {activeView === 'support' && (
              <motion.div 
                key="support"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <SupportForm />
              </motion.div>
            )}

            {activeView === '404' && (
              <motion.div 
                key="404"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <NotFound onGoHome={() => setActiveView('dashboard')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function NavItem({ active, onClick, icon, label, collapsed }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string, collapsed?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-3.5 rounded-2xl transition-all duration-300 group relative",
        active 
          ? "bg-emerald-500 text-black font-black" 
          : "hover:bg-white/5 text-gray-500 hover:text-white"
      )}
    >
      <span className={cn("flex-shrink-0 transition-transform duration-300", active ? "scale-110" : "group-hover:scale-110")}>
        {icon}
      </span>
      {!collapsed && <span className="text-xs font-bold uppercase tracking-widest">{label}</span>}
      {active && !collapsed && (
        <motion.div layoutId="active-nav-dot" className="absolute right-4 w-1.5 h-1.5 rounded-full bg-black/40" />
      )}
    </button>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-[#111215] border border-[#222327] p-8 rounded-3xl flex items-center gap-6 group hover:border-emerald-500/20 transition-all shadow-xl">
       <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/5 shadow-inner">
          {icon}
       </div>
       <div>
          <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
          <p className="text-3xl font-black text-white tabular-nums tracking-tighter">{value}</p>
       </div>
    </div>
  );
}

function TutorialCard({ tutorial, onClick }: { tutorial: Tutorial, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[#151619] border border-[#2A2B2F] p-8 rounded-3xl hover:border-emerald-500/40 transition-all cursor-pointer group hover:bg-[#1A1B1E] shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-all translate-x-4 -translate-y-4">
         <GraduationCap size={100} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className={cn(
            "text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border",
            tutorial.level === 'Débutant' ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
            tutorial.level === 'Intermédiaire' ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
            "bg-rose-500/10 text-rose-400 border-rose-500/20"
          )}>
            {tutorial.level}
          </span>
          <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">{tutorial.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{tutorial.description}</p>
      </div>
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col h-full group">
       <div className="aspect-[3/4.5] rounded-2xl overflow-hidden mb-6 bg-[#1A1B1E] relative border border-[#222327] shadow-2xl group-hover:border-emerald-500/30 transition-all">
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
             <div className="flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black p-3 rounded-full hover:bg-emerald-500 transition-colors shadow-2xl"
                >
                  <ExternalLink size={20} />
                </a>
             </div>
          </div>
       </div>
       <div className="px-2">
         <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-500 transition-colors">{book.title}</h3>
         <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-4">{book.author}</p>
         <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-6">{book.description}</p>
         <a 
           href={book.link} 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 hover:text-emerald-400 transition-all flex items-center gap-2"
         >
           Commander l'ouvrage
           <ChevronRight size={12} />
         </a>
       </div>
    </div>
  );
}
