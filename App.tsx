
import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './data/questions';
import { QuizState, Category } from './types';
import { Button } from './components/Button';
import { ScoreBoard } from './components/ScoreBoard';
import { getAnswerExplanation } from './services/geminiService';

const STORAGE_KEY = 'detran_maratona_full_v2';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'start' | 'quiz' | 'result'>('start');
  const [quiz, setQuiz] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: { correct: 0, wrong: 0 },
    userAnswers: new Array(QUESTIONS.length).fill(null),
    isFinished: false,
  });
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.currentQuestionIndex === 'number' && parsed.currentQuestionIndex < QUESTIONS.length) {
          setHasSavedProgress(true);
        }
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (gameState === 'quiz') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(quiz));
    } else if (gameState === 'result') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [quiz, gameState]);

  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [quiz.currentQuestionIndex]);

  const startNewQuiz = () => {
    localStorage.removeItem(STORAGE_KEY);
    setQuiz({
      currentQuestionIndex: 0,
      score: { correct: 0, wrong: 0 },
      userAnswers: new Array(QUESTIONS.length).fill(null),
      isFinished: false,
    });
    setGameState('quiz');
    setIsAnswered(false);
    setSelectedOption(null);
    setExplanation(null);
  };

  const resumeQuiz = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setQuiz(parsed);
      setGameState('quiz');
      const currentAns = parsed.userAnswers[parsed.currentQuestionIndex];
      if (currentAns !== null) {
        setSelectedOption(currentAns);
        setIsAnswered(true);
      }
    }
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const currentQuestion = QUESTIONS[quiz.currentQuestionIndex];

  const submitAnswer = async () => {
    if (selectedOption === null || isAnswered) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsAnswered(true);

    setQuiz(prev => ({
      ...prev,
      score: {
        correct: prev.score.correct + (isCorrect ? 1 : 0),
        wrong: prev.score.wrong + (isCorrect ? 0 : 1),
      },
      userAnswers: prev.userAnswers.map((ans, i) => i === prev.currentQuestionIndex ? selectedOption : ans)
    }));

    if (!isCorrect) {
      setIsLoadingExplanation(true);
      const expl = await getAnswerExplanation(
        currentQuestion.text,
        currentQuestion.options[currentQuestion.correctAnswer],
        currentQuestion.category
      );
      setExplanation(expl);
      setIsLoadingExplanation(false);
    }
  };

  const nextQuestion = () => {
    if (quiz.currentQuestionIndex === QUESTIONS.length - 1) {
      setGameState('result');
    } else {
      setQuiz(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
      setIsAnswered(false);
      setSelectedOption(null);
      setExplanation(null);
    }
  };

  const passThreshold = Math.ceil(QUESTIONS.length * 0.7);
  const isApproved = quiz.score.correct >= passThreshold;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
              D
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Simulado Master DETRAN</h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Banco de Dados: {QUESTIONS.length} Questões</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {gameState === 'start' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 text-center animate-in fade-in zoom-in duration-500">
            <div className="mb-6 inline-block p-5 bg-blue-50 rounded-full">
              <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-4">Maratona de Estudos</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
              Você está prestes a iniciar o simulado completo com <strong>{QUESTIONS.length} perguntas</strong> e suporte visual para todas as placas oficiais.
            </p>
            <div className="flex flex-col gap-3">
              {hasSavedProgress && (
                <Button size="lg" variant="success" onClick={resumeQuiz} className="py-4 shadow-lg shadow-emerald-100 font-bold">
                  Continuar Maratona
                </Button>
              )}
              <Button size="lg" onClick={startNewQuiz} variant={hasSavedProgress ? 'outline' : 'primary'} className="py-4 font-bold">
                Iniciar Nova Prova
              </Button>
            </div>
          </div>
        )}

        {gameState === 'quiz' && (
          <div className="animate-in slide-in-from-bottom-8 duration-500">
            <ScoreBoard 
              correct={quiz.score.correct} 
              wrong={quiz.score.wrong} 
              total={QUESTIONS.length} 
              current={quiz.currentQuestionIndex} 
            />

            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100 mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {currentQuestion.category}
                </span>
                <span className="text-sm font-black text-slate-300">Questão {currentQuestion.id} / {QUESTIONS.length}</span>
              </div>

              {currentQuestion.imageUrl && (
                <div className="flex flex-col items-center justify-center mb-10">
                  <div className="relative p-6 bg-white rounded-3xl border-4 border-slate-50 shadow-sm min-h-[220px] w-full max-w-[340px] flex items-center justify-center overflow-hidden">
                    {imageLoading && !imageError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/50 z-10">
                        <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    {imageError ? (
                      <div className="flex flex-col items-center gap-3 text-slate-300 p-6 text-center">
                        <div className="p-4 bg-slate-50 rounded-full">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs font-black text-slate-400 uppercase">Referência Indisponível</p>
                      </div>
                    ) : (
                      <img 
                        src={currentQuestion.imageUrl} 
                        alt={currentQuestion.imageDescription || "Sinalização de Trânsito"}
                        referrerPolicy="no-referrer"
                        onLoad={() => setImageLoading(false)}
                        onError={() => {
                          console.error("Image load failed:", currentQuestion.imageUrl);
                          setImageError(true);
                          setImageLoading(false);
                        }}
                        className={`max-h-52 md:max-h-64 w-auto object-contain transition-all duration-700 ${imageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                      />
                    )}
                  </div>
                  <p className="mt-4 text-[11px] text-slate-400 font-black uppercase tracking-[0.2em]">Sinalização Oficial</p>
                </div>
              )}
              
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-10 leading-snug">
                {currentQuestion.text}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  let styles = "border-2 border-slate-100 bg-slate-50 hover:bg-slate-100 hover:border-slate-200 text-slate-700";
                  if (selectedOption === idx) styles = "border-blue-500 bg-blue-50 ring-4 ring-blue-50 text-blue-900 font-semibold";
                  if (isAnswered) {
                    if (idx === currentQuestion.correctAnswer) styles = "border-emerald-500 bg-emerald-50 ring-4 ring-emerald-50 text-emerald-900 font-bold";
                    else if (selectedOption === idx) styles = "border-red-500 bg-red-50 ring-4 ring-red-50 text-red-900 font-bold";
                    else styles = "opacity-40 border-slate-50 bg-slate-50 text-slate-400 grayscale";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 group ${styles}`}
                    >
                      <span className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-xl text-xs font-black border-2 transition-colors ${
                        selectedOption === idx ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-400 group-hover:border-slate-300'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 text-sm md:text-base leading-tight">{option}</span>
                    </button>
                  );
                })}
              </div>

              {explanation && (
                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="flex items-center gap-3 mb-3 text-amber-800 font-black text-xs uppercase tracking-widest">
                    <div className="w-6 h-6 bg-amber-200 rounded-lg flex items-center justify-center">🎓</div>
                    Explicação Instrutor IA
                  </div>
                  <p className="text-amber-900 text-sm leading-relaxed italic font-medium">"{explanation}"</p>
                </div>
              )}

              {isLoadingExplanation && (
                <div className="mt-8 flex justify-center py-6">
                  <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest animate-pulse">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                    Consultando CTB...
                  </div>
                </div>
              )}

              <div className="mt-12">
                {!isAnswered ? (
                  <Button fullWidth size="lg" onClick={submitAnswer} disabled={selectedOption === null} className="py-5 shadow-xl shadow-blue-100 font-black uppercase tracking-widest">
                    Confirmar Resposta
                  </Button>
                ) : (
                  <Button fullWidth size="lg" onClick={nextQuestion} className="py-5 shadow-xl shadow-slate-100 font-black uppercase tracking-widest bg-slate-900 hover:bg-black">
                    {quiz.currentQuestionIndex === QUESTIONS.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {gameState === 'result' && (
          <div className="animate-in zoom-in-95 duration-700">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 text-center relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 ${isApproved ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <h2 className="text-4xl font-black text-slate-800 mb-8">Desempenho Final</h2>
              
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className={`absolute inset-0 blur-3xl opacity-20 ${isApproved ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <svg className="w-48 h-48 transform -rotate-90 relative">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-slate-100" />
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent"
                      strokeDasharray={502.6}
                      strokeDashoffset={502.6 - (502.6 * (quiz.score.correct / QUESTIONS.length))}
                      strokeLinecap="round"
                      className={`transition-all duration-1000 ease-out ${isApproved ? "text-emerald-500" : "text-amber-500"}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-slate-800 leading-none">{Math.round((quiz.score.correct / QUESTIONS.length) * 100)}%</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Acertos</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 shadow-sm text-emerald-700">
                  <span className="text-[10px] font-black uppercase block mb-2 text-emerald-500">Corretas</span>
                  <span className="text-4xl font-black">{quiz.score.correct}</span>
                </div>
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 shadow-sm text-red-700">
                  <span className="text-[10px] font-black uppercase block mb-2 text-red-400">Incorretas</span>
                  <span className="text-4xl font-black">{quiz.score.wrong}</span>
                </div>
              </div>

              <p className="text-slate-500 mb-8 font-medium italic">
                {isApproved ? "Parabéns! Você atingiu a pontuação mínima necessária para aprovação." : "Atenção: Você precisa de no mínimo 70% para ser aprovado na prova oficial."}
              </p>

              <Button variant="outline" size="lg" fullWidth onClick={startNewQuiz} className="py-5 font-black uppercase tracking-widest border-slate-200 text-slate-500">
                Reiniciar Maratona
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
