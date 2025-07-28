import  { useEffect, useState } from 'react';
import '../css/macbook.css';

const codeLines = [
  'const helloWorld = () => {',
  'console.log("Hello, world!");',
  '}',
  'function greet(name) {',
  '  return `Hello, ${name}!`;',
  '}',
  'greet("Ikhsan");',
];

const Macbook = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const line = codeLines[currentLine];
    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = (newLines[currentLine] || '') + line[charIndex];
          return newLines;
        });
        setCharIndex(charIndex + 1);
      }, 60); // kecepatan ngetik
      return () => clearTimeout(timeout);
    } else {
      if (currentLine < codeLines.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCharIndex(0);
        }, 500); // jeda pindah ke baris berikutnya
        return () => clearTimeout(timeout);
      } else {
        // Delay, lalu reset semuanya untuk loop
        const timeout = setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLine(0);
          setCharIndex(0);
        }, 2000); // jeda setelah selesai semua
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentLine]);

  return (
    <div className="w-full h-full flex justify-center items-center rotate-6 floating-elegant">
      <div className="macbook relative w-[228px] h-[260px]">
        <div className="macbook__topBord">
          <div className="macbook__display">
            <div className="macbook__load"></div>
            <div className="vscode-screen fade-in-delay">
              <div className="vscode-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre className="vscode-code">
                {displayedLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                <span className="blinking-cursor">|</span>
              </pre>
            </div>
          </div>
        </div>
        <div className="macbook__underBord">
          <div className="macbook__keybord">
            <div className="keybord">
              <div className="keybord__touchbar"></div>
              <ul className="keybord__keyBox">
                {Array.from({ length: 13 }, (_, i) => (
                  <li key={i} className={`keybord__key key--${String(i + 1).padStart(2, '0')}`}></li>
                ))}
              </ul>
              <ul className="keybord__keyBox--under">
                {Array.from({ length: 11 }, (_, i) => (
                  <li key={i} className={`keybord__key key--${String(i + 14).padStart(2, '0')}`}></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
