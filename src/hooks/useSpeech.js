"use client";

import { useState, useCallback, useEffect } from "react";

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = (text, speechCode) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechCode;

    const trySpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const match = voices.find(v => v.lang.startsWith(speechCode.split('-')[0]));
      if (match) utterance.voice = match;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = trySpeak;
    } else {
      trySpeak();
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return { speaking, speak, stop };
}
