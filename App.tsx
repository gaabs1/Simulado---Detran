
import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './data/questions';
import { QuizState, Category } from './types';
import { Button } from './components/Button';
import { ScoreBoard } from './components/ScoreBoard';
import { EncouragementToast } from './components/EncouragementToast';
import { QuestionGrid } from './components/QuestionGrid';
import { getAnswerExplanation } from './services/geminiService';

const STORAGE_KEY = 'detran_maratona_paola_v1';

const PAOLA_MESSAGES_SUCCESS = [
  "Você é incrível, Paola! Mandou muito bem!",
  "Arrasou na resposta! Sua inteligência é admirável.",
  "Paola, você está voando! A CNH já é realidade.",
  "Que orgulho de você, Paola! Mais um acerto!",
  "Sua dedicação é inspiradora. Parabéns, Paola!",
  "Você é fera demais! Continue assim!",
  "Paola, cada acerto te deixa mais perto da sua conquista!"
];

const PAOLA_MESSAGES_SUPPORT = [
  "Não desanima, Paola! Você está aprendendo e evoluindo.",
  "Tudo bem errar, Paola! O importante é entender o porquê.",
  "Paola, você é capaz de superar qualquer desafio. Foco na próxima!",
  "A gente aprende com os erros. Você é muito esforçada!",
  "Respira fundo, Paola! Você é brilhante e vai conseguir.",
  "Continue firme, Paola! O conhecimento vem com a prática."
];

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

  // States para o pop-up da Paola
  const [showPaolaToast, setShowPaolaToast] = useState(false);
  const [paolaMessage, setPaolaMessage] = useState("");
  const [toastType, setToastType] = useState<'success' | 'info'>('success');

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
    // Sincronizar estados locais ao mudar de questão via grid
    const currentAns = quiz.userAnswers[quiz.currentQuestionIndex];
    if (currentAns !== null) {
      setSelectedOption(currentAns);
      setIsAnswered(true);
      setExplanation(null); // Poderíamos salvar a explicação, mas por simplicidade limpamos
    } else {
      setSelectedOption(null);
      setIsAnswered(false);
      setExplanation(null);
    }
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
    }
  };

  const navigateToQuestion = (index: number) => {
    setQuiz(prev => ({ ...prev, currentQuestionIndex: index }));
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

    if (isCorrect) {
      const msg = PAOLA_MESSAGES_SUCCESS[Math.floor(Math.random() * PAOLA_MESSAGES_SUCCESS.length)];
      setPaolaMessage(msg);
      setToastType('success');
    } else {
      const msg = PAOLA_MESSAGES_SUPPORT[Math.floor(Math.random() * PAOLA_MESSAGES_SUPPORT.length)];
      setPaolaMessage(msg);
      setToastType('info');
    }
    setShowPaolaToast(true);

    const newUserAnswers = [...quiz.userAnswers];
    newUserAnswers[quiz.currentQuestionIndex] = selectedOption;

    setQuiz(prev => ({
      ...prev,
      score: {
        correct: prev.score.correct + (isCorrect ? 1 : 0),
        wrong: prev.score.wrong + (isCorrect ? 0 : 1),
      },
      userAnswers: newUserAnswers
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

  const resetQuestion = () => {
    const wasCorrect = quiz.userAnswers[quiz.currentQuestionIndex] === currentQuestion.correctAnswer;
    const newUserAnswers = [...quiz.userAnswers];
    newUserAnswers[quiz.currentQuestionIndex] = null;

    setQuiz(prev => ({
      ...prev,
      score: {
        correct: prev.score.correct - (wasCorrect ? 1 : 0),
        wrong: prev.score.wrong - (wasCorrect ? 0 : 1),
      },
      userAnswers: newUserAnswers
    }));
    setIsAnswered(false);
    setSelectedOption(null);
    setExplanation(null);
  };

  const nextQuestion = () => {
    if (quiz.currentQuestionIndex === QUESTIONS.length - 1) {
      setGameState('result');
    } else {
      navigateToQuestion(quiz.currentQuestionIndex + 1);
    }
  };

  const passThreshold = Math.ceil(QUESTIONS.length * 0.7);
  const isApproved = quiz.score.correct >= passThreshold;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <EncouragementToast 
        isVisible={showPaolaToast} 
        message={paolaMessage} 
        type={toastType}
        onClose={() => setShowPaolaToast(false)} 
      />

      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
              D
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Simulado Paola - Foco na CNH!</h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Simulado Inteligente v2.0</p>
            </div>
          </div>
          <div className="hidden md:block">
            <Button size="sm" variant="outline" onClick={() => setGameState('start')}>Início</Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {gameState === 'start' && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-slate-100 text-center animate-in fade-in zoom-in duration-500">
            <div className="mb-6 inline-block p-5 bg-pink-50 rounded-full">
              <span className="text-4xl">👑</span>
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Oi, Paola!</h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              Preparei este mapa completo para você. Agora você pode navegar entre as <strong>{QUESTIONS.length} perguntas</strong> e responder quantas vezes precisar para ficar craque!
            </p>
            <div className="flex flex-col gap-3">
              {hasSavedProgress && (
                <Button size="lg" variant="success" onClick={resumeQuiz} className="py-4 shadow-lg shadow-emerald-100 font-bold">
                  Continuar de onde parei!
                </Button>
              )}
              <Button size="lg" onClick={startNewQuiz} variant={hasSavedProgress ? 'outline' : 'primary'} className="py-4 font-bold">
                Começar do Zero
              </Button>
            </div>
          </div>
        )}

        {gameState === 'quiz' && (
          <div className="flex flex-col lg:flex-row gap-8 items-start animate-in slide-in-from-bottom-8 duration-500">
            {/* Coluna Principal da Pergunta */}
            <div className="flex-1 w-full order-2 lg:order-1">
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
                  <div className="flex items-center gap-3">
                    {isAnswered && (
                      <button 
                        onClick={resetQuestion}
                        className="text-[10px] font-black uppercase text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1"
                      >
                        🔄 Responder de novo
                      </button>
                    )}
                    <span className="text-sm font-black text-slate-300">Questão {currentQuestion.id} / {QUESTIONS.length}</span>
                  </div>
                </div>

                {currentQuestion.imageUrl && (
                  <div className="flex flex-col items-center justify-center mb-10">
                    <div className="relative p-6 bg-white rounded-3xl border-4 border-slate-50 shadow-sm min-h-[220px] w-full max-w-[340px] flex items-center justify-center overflow-hidden">
                      {imageLoading && !imageError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/50 z-10">
                          <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img 
                        src={currentQuestion.imageUrl} 
                        alt="Sinalização de Trânsito"
                        referrerPolicy="no-referrer"
                        onLoad={() => setImageLoading(false)}
                        onError={() => setImageError(true)}
                        className={`max-h-52 md:max-h-64 w-auto object-contain transition-all duration-700 ${imageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                      />
                    </div>
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
                  <div className="mt-8 flex justify-center py-6 text-blue-500 font-bold text-xs uppercase tracking-widest animate-pulse">
                    Consultando CTB para você, Paola...
                  </div>
                )}

                <div className="mt-12">
                  {!isAnswered ? (
                    <Button fullWidth size="lg" onClick={submitAnswer} disabled={selectedOption === null} className="py-5 shadow-xl shadow-blue-100 font-black uppercase tracking-widest">
                      Confirmar Resposta
                    </Button>
                  ) : (
                    <Button fullWidth size="lg" onClick={nextQuestion} className="py-5 shadow-xl shadow-slate-100 font-black uppercase tracking-widest bg-slate-900 hover:bg-black">
                      {quiz.currentQuestionIndex === QUESTIONS.length - 1 ? 'Ver Resultado Final' : 'Próxima Questão'}
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Coluna do Mapa de Navegação */}
            <aside className="w-full lg:w-72 order-1 lg:order-2">
              <QuestionGrid 
                total={QUESTIONS.length}
                currentIndex={quiz.currentQuestionIndex}
                userAnswers={quiz.userAnswers}
                questions={QUESTIONS}
                onNavigate={navigateToQuestion}
              />
            </aside>
          </div>
        )}

        {gameState === 'result' && (
          <div className="animate-in zoom-in-95 duration-700 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 text-center relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 ${isApproved ? 'bg-pink-500' : 'bg-amber-500'}`} />
              <h2 className="text-4xl font-black text-slate-800 mb-2">Fim da Maratona!</h2>
              <p className="text-pink-600 font-black text-xl mb-8">Parabéns pelo esforço, Paola! ✨</p>
              
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

              <div className="flex flex-col gap-3">
                <Button variant="primary" size="lg" fullWidth onClick={() => setGameState('quiz')} className="py-5 font-black uppercase tracking-widest">
                  Revisar Erros no Mapa
                </Button>
                <Button variant="outline" size="lg" fullWidth onClick={startNewQuiz} className="py-5 font-black uppercase tracking-widest border-slate-200 text-slate-500">
                  Reiniciar Simulado
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
