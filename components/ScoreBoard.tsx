
import React from 'react';

interface ScoreBoardProps {
  correct: number;
  wrong: number;
  total: number;
  current: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ correct, wrong, total, current }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-gray-400 uppercase">Acertos</span>
            <span className="text-xl font-bold text-emerald-600">{correct}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-gray-400 uppercase">Erros</span>
            <span className="text-xl font-bold text-red-500">{wrong}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-gray-400 uppercase block">Progresso</span>
          <span className="text-lg font-bold text-blue-600">{current + 1} <span className="text-gray-300">/</span> {total}</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
