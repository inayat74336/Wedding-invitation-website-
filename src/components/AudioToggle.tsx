import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { royalAudioPlayer } from '../utils/audioPlayer';

interface AudioToggleProps {
  onToggle?: (playing: boolean) => void;
}

export const AudioToggle: React.FC<AudioToggleProps> = ({ onToggle }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(() => royalAudioPlayer.getIsPlaying());

  const handleToggle = () => {
    const newState = royalAudioPlayer.toggle();
    setIsPlaying(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? 'Pause wedding soundtrack' : 'Play wedding soundtrack'}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-[#3A0D17]/95 border-[#C5A059] text-[#F5EFEB] shadow-[#3A0D17]/30 ring-1 ring-[#C5A059]/40'
            : 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#C5A059]/40 text-[#4A0E1C] hover:border-[#C5A059]'
        }`}
      >
        {/* Animated equalizer bars when playing */}
        <div className="flex items-end gap-[2px] h-3.5 w-3.5">
          <span
            className={`w-[2px] rounded-full transition-all ${
              isPlaying
                ? 'bg-[#E7D39F] animate-pulse h-3'
                : 'bg-[#8C6D2B] h-1'
            }`}
          />
          <span
            className={`w-[2px] rounded-full transition-all ${
              isPlaying
                ? 'bg-[#E7D39F] animate-ping h-3.5 delay-150'
                : 'bg-[#8C6D2B] h-2'
            }`}
          />
          <span
            className={`w-[2px] rounded-full transition-all ${
              isPlaying
                ? 'bg-[#E7D39F] animate-pulse h-2 delay-300'
                : 'bg-[#8C6D2B] h-1'
            }`}
          />
        </div>

        <span className="font-cinzel text-[11px] tracking-wider uppercase font-medium">
          {isPlaying ? 'Sound On' : 'Music'}
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#E7D39F]" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#8C6D2B]/80" />
        )}
      </button>
    </div>
  );
};
