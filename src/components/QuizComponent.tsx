import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  Trophy,
  HelpCircle,
  AlertCircle,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Quiz, Question } from '../types';
import { cn } from '../lib/utils';

interface QuizComponentProps {
  quiz: Quiz;
  onClose: () => void;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, { selectedOption: number; isAnswered: boolean; isCorrect: boolean }>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(true);
  const [displayedQuestion, setDisplayedQuestion] = useState<Question | null>(null);

  // Lazy loading effect for questions
  React.useEffect(() => {
    const loadQuestion = async () => {
      setIsLoadingQuestion(true);
      // Restore states when switching questions via breadcrumb
      const existingAnswer = userAnswers[currentQuestionIndex];
      if (existingAnswer) {
        setSelectedOption(existingAnswer.selectedOption);
        setIsAnswered(existingAnswer.isAnswered);
      } else {
        setSelectedOption(null);
        setIsAnswered(false);
      }
      
      // Simulate an async fetch for the question to prevent UI blocking
      // even if the data set is large.
      await new Promise(resolve => setTimeout(resolve, 500));
      setDisplayedQuestion(quiz.questions[currentQuestionIndex]);
      setIsLoadingQuestion(false);
    };
    loadQuestion();
  }, [currentQuestionIndex, quiz.questions]);

  const handleOptionSelect = (index: number) => {
    if (isAnswered || isLoadingQuestion) return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null || !displayedQuestion) return;
    
    try {
      const isCorrect = selectedOption === displayedQuestion.correctAnswer;
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
      setIsAnswered(true);
      setUserAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: {
          selectedOption,
          isAnswered: true,
          isCorrect
        }
      }));
      setError(null);
    } catch (err) {
      console.error('Error confirming answer:', err);
      setError("Erreur technique : impossible de valider votre réponse. Veuillez réessayer.");
    }
  };

  const handleNext = async () => {
    if (!displayedQuestion) return;
    
    try {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        
        // Restore state for the next question if it was already answered
        const nextAnswer = userAnswers[nextIndex];
        if (nextAnswer) {
          setSelectedOption(nextAnswer.selectedOption);
          setIsAnswered(nextAnswer.isAnswered);
        } else {
          setSelectedOption(null);
          setIsAnswered(false);
        }
      } else {
        setIsSubmitting(true);
        // Simulation d'une soumission à un serveur
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Chance de succès 95% pour la démo
            if (Math.random() > 0.05) resolve(true);
            else reject(new Error("Database connection timeout"));
          }, 1500);
        });

        setShowResults(true);
        if (score + (selectedOption === displayedQuestion.correctAnswer ? 1 : 0) === quiz.questions.length) {
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      }
      setError(null);
    } catch (err) {
      console.error('Error during submission/transition:', err);
      setError("Erreur de soumission : impossible d'enregistrer vos résultats. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuiz = () => {
    try {
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setScore(0);
      setUserAnswers({});
      setShowResults(false);
      setError(null);
      setDisplayedQuestion(null);
    } catch (err) {
      setError("Impossible de relancer le quiz.");
    }
  };

  const QuestionSkeleton = () => (
    <div className="animate-pulse space-y-8">
      {/* Question Header Skeleton */}
      <div className="h-8 bg-gray-800 rounded-xl w-3/4" />
      
      {/* Options Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-16 bg-gray-800/50 rounded-2xl border border-gray-800/50" />
        ))}
      </div>
      
      {/* Footer Skeleton */}
      <div className="flex justify-between items-center pt-4">
        <div className="h-12 bg-gray-800 rounded-xl w-48" />
        <div className="h-12 bg-gray-800 rounded-xl w-32" />
      </div>
    </div>
  );

  const Breadcrumb = () => (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {quiz.questions.map((_, idx) => {
        const answer = userAnswers[idx];
        const isCurrent = currentQuestionIndex === idx;
        const isAnswered = !!answer;
        const isCorrect = answer?.isCorrect;

        return (
          <button
            key={idx}
            onClick={() => {
              if (!isLoadingQuestion) setCurrentQuestionIndex(idx);
            }}
            className={cn(
              "w-8 h-8 rounded-full text-xs font-bold transition-all flex items-center justify-center border-2",
              isCurrent 
                ? "border-emerald-500 bg-emerald-500 text-black scale-110 shadow-lg shadow-emerald-500/20" 
                : isAnswered 
                  ? isCorrect 
                    ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-500" 
                    : "border-rose-500/50 bg-rose-500/10 text-rose-500"
                  : "border-gray-800 bg-gray-800/50 text-gray-500 hover:border-gray-600"
            )}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto w-full px-2 sm:px-0">
      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-3 text-rose-400 text-sm"
          >
            <AlertCircle size={18} />
            <span className="flex-1">{error}</span>
            <button onClick={() => setError(null)} className="p-1 hover:bg-white/5 rounded-lg transition-colors">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-[#151619] border border-[#2A2B2F] rounded-3xl p-6 md:p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl hidden sm:flex items-center justify-center">
                  <HelpCircle className="text-emerald-500 w-5 h-5" />
                </div>
                <div>
                   <h3 className="text-base md:text-lg font-bold text-white">{quiz.title}</h3>
                   <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Question {currentQuestionIndex + 1}/{quiz.questions.length}</p>
                </div>
              </div>
              <div className="text-xs md:text-sm font-mono text-gray-400">
                Score: {score}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-gray-800 rounded-full mb-6 overflow-hidden">
               <motion.div 
                 className="h-full bg-emerald-500"
                 initial={{ width: 0 }}
                 animate={{ width: `${((Object.keys(userAnswers).length) / quiz.questions.length) * 100}%` }}
               />
            </div>

            {/* Breadcrumb */}
            <Breadcrumb />

            <AnimatePresence mode="wait">
              {isLoadingQuestion || !displayedQuestion ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <QuestionSkeleton />
                </motion.div>
              ) : (
                <motion.div
                  key={displayedQuestion.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Question */}
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 leading-tight">
                    {displayedQuestion.text}
                  </h4>

                  {/* Options */}
                  <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {displayedQuestion.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = displayedQuestion.correctAnswer === idx;
                      
                      let borderColor = "border-[#2A2B2F]";
                      let bgColor = "bg-white/5";
                      let textColor = "text-gray-300";

                      if (isAnswered) {
                        if (isCorrect) {
                          borderColor = "border-emerald-500";
                          bgColor = "bg-emerald-500/10";
                          textColor = "text-emerald-400";
                        } else if (isSelected) {
                          borderColor = "border-rose-500";
                          bgColor = "bg-rose-500/10";
                          textColor = "text-rose-400";
                        }
                      } else if (isSelected) {
                        borderColor = "border-white/40";
                        bgColor = "bg-white/10";
                        textColor = "text-white";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(idx)}
                          disabled={isAnswered}
                          className={cn(
                            "w-full p-4 md:p-5 rounded-2xl border text-left transition-all relative group",
                            borderColor, bgColor, textColor,
                            !isAnswered && "hover:border-white/20 active:scale-[0.99]",
                            isAnswered && !isCorrect && !isSelected && "opacity-40"
                          )}
                        >
                          <div className="flex items-center gap-3 md:gap-4">
                            <span className={cn(
                              "w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-xs md:text-sm font-bold font-mono border flex-shrink-0",
                              isSelected ? "bg-white text-black border-white" : "border-gray-800 text-gray-500"
                            )}>
                                {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="text-base md:text-lg font-medium">{option}</span>
                          </div>
                          {isAnswered && isCorrect && (
                            <CheckCircle2 className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                          )}
                          {isAnswered && isSelected && !isCorrect && (
                            <XCircle className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-rose-500" size={20} />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback & Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex-1 w-full sm:w-auto">
                      <AnimatePresence>
                        {isAnswered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs md:text-sm text-gray-400 font-medium bg-white/5 p-4 rounded-xl border border-white/5"
                          >
                            <span className="text-gray-200 block mb-1 font-bold">Le Saviez-vous ?</span>
                            {displayedQuestion.explanation}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex-shrink-0 w-full sm:w-auto">
                      {!isAnswered ? (
                        <button
                          onClick={handleConfirm}
                          disabled={selectedOption === null}
                          className={cn(
                            "w-full sm:w-auto px-10 py-3.5 rounded-xl font-bold transition-all active:scale-95",
                            selectedOption === null 
                              ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                              : "bg-white text-black hover:bg-gray-200 shadow-xl shadow-white/10"
                          )}
                        >
                          Vérifier
                        </button>
                      ) : (
                        <button
                          onClick={handleNext}
                          disabled={isSubmitting}
                          className={cn(
                            "w-full sm:w-auto px-10 py-3.5 bg-emerald-500 text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-wait",
                            isSubmitting && "animate-pulse"
                          )}
                        >
                          {isSubmitting ? (
                            "Traitement..."
                          ) : (
                            <>
                              {currentQuestionIndex === quiz.questions.length - 1 ? "Résultats" : "Suivant"}
                              <ChevronRight size={18} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#151619] border border-[#2A2B2F] rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
               <Trophy className="text-emerald-500 w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tight uppercase">Quiz Terminé</h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">Score final obtenu</p>
            
            <div className="text-6xl md:text-8xl font-black text-emerald-500 mb-4 tabular-nums">
              {Math.round((score / quiz.questions.length) * 100)}%
            </div>
            <p className="text-white font-mono text-lg md:text-xl mb-10 md:mb-12">
              {score} / {quiz.questions.length} RÉPONSES
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <RotateCcw size={18} />
                Faire le test
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 text-black rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
              >
                Quitter le Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
