import { useState } from "react";

const LANGUAGE_MAP = {
  English: "en-US",
  Hindi: "hi-IN",
  Bengali: "bn-IN",
  Tamil: "ta-IN",
};

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);

  function speak(text, language) {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = LANGUAGE_MAP[language] || "en-US";

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  function stop() {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  return { speaking, speak, stop };
}
