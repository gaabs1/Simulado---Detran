
import React, { useEffect, useState } from 'react';

interface EncouragementToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type: 'success' | 'info';
}

export const EncouragementToast: React.FC<EncouragementToastProps> = ({ message, isVisible, onClose, type }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !shouldRender) return null;

  return (
    <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-90'
    }`}>
      <div className={`px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border-2 ${
        type === 'success' 
          ? 'bg-white border-pink-200 text-pink-600' 
          : 'bg-white border-blue-100 text-blue-600'
      }`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${
          type === 'success' ? 'bg-pink-50' : 'bg-blue-50'
        }`}>
          {type === 'success' ? '💖' : '💪'}
        </div>
        <div>
          <p className="font-black text-sm uppercase tracking-tighter">Ei, Paola!</p>
          <p className="text-slate-700 font-bold leading-tight">{message}</p>
        </div>
      </div>
    </div>
  );
};
