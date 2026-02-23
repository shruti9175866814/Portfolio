import React, { useEffect, useState } from "react";

const TextChange = () => {
  const texts = ["HTML Developer", "CSS Developer", "JavaScript Developer", "React Developer","Angular Developer ","Full Stack Developer","Web Developer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // word fully typed → wait 3 sec
        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // deleting
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        // word deleted → move to next
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <span className="text-[#465697] font-semibold transition-all duration-300">
      {currentText}
    </span>
  );
};

export default TextChange;