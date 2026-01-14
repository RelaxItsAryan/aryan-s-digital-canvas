import React from 'react';
import FuzzyText from './FuzzyText';

export const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden fade-in">
      <img
        src="https://img.freepik.com/premium-vector/black-devil-logo-red-background_840347-905.jpg"
        alt="Devil Logo"
        className="w-24 h-24 rounded-full mb-6 animate-moon-spin drop-shadow-[0_0_24px_#a00] object-cover bg-black"
        style={{ userSelect: 'none' }}
      />
      <FuzzyText
        fontSize="clamp(2.5rem, 8vw, 7rem)"
        fontWeight={900}
        color="#fff"
        baseIntensity={0.18}
        hoverIntensity={0.5}
        fuzzRange={30}
        fps={60}
        direction="horizontal"
        transitionDuration={0.2}
        gradient={["#b0b0b0", "#444", "#000"]}
        className="select-none"
      >
        Loading Aryan Verse
      </FuzzyText>
    </div>
  );
};
