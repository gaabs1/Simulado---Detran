
import React from 'react';
import { Question } from '../types';

interface QuestionGridProps {
  total: number;
  currentIndex: number;
  userAnswers: (number | null)[];
  questions: Question[];
  onNavigate: (index: number) => void;
}

export const QuestionGrid: React.FC<QuestionGridProps> = ({
  total,
  currentIndex,
  userAnswers,
  questions,
  onNavigate
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 h-fit sticky top-24 max-h-[calc(100vh-120px)] overflow-hidden flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
          Mapa da Prova
        </h4>
        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
          {userAnswers.filter(a => a !== null).length} respondidas
        </span>
      </div>
      
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 gap-2 overflow-y-auto pr-2 custom-scrollbar">
        {Array.from({ length: total }).map((_, idx) => {
          const isCurrent = currentIndex === idx;
          const answer = userAnswers[idx];
          const isCorrect = answer !== null && answer === questions[idx].correctAnswer;
          const isAnswered = answer !== null;

          let bgClass = "bg-slate-50 text-slate-400 border-slate-100";
          if (isCurrent) bgClass = "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100 ring-2 ring-blue-100 ring-offset-1";
          else if (isAnswered) {
            bgClass = isCorrect 
              ? "bg-emerald-500 text-white border-emerald-500 shadow-sm" 
              : "bg-red-500 text-white border-red-500 shadow-sm";
          }

          return (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={`w-full aspect-square flex items-center justify-center rounded-xl text-[11px] font-black border-2 transition-all duration-200 hover:scale-110 active:scale-95 ${bgClass}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-tighter">
        <div className="flex items-center gap-2 text-emerald-600">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Acertos
        </div>
        <div className="flex items-center gap-2 text-red-500">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span> Erros
        </div>
        <div className="flex items-center gap-2 text-blue-600">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Atual
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-2 h-2 bg-slate-200 rounded-full"></span> Pendente
        </div>
      </div>
    </div>
  );
};
