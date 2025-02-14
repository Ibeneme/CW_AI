import React, { useState, useEffect } from "react";
import "./PuzzleGame.css"; // Import styles
import { WORDS_POOL } from "./WordPool";

// Define word pools for each language
//const [language, setLanguage] = useState<'ENGLISH' | 'HAUSA' | 'IGBO' | 'YORUBA'>("ENGLISH");

const GRID_ROWS = 8; // Reduced to 8 rows
const GRID_COLS = 8; // Reduced to 8 columns

const getRandomWords = (
  level: number,
  language:
    | "ENGLISH"
    | "HAUSA"
    | "IGBO"
    | "YORUBA"
    | "BENIN"
    | "TIV"
    | "IGALA"
    | "IKWERRE"
    | "FULANI"
    | "FRENCH"
    | "SPANISH"
    | "CHINESE"
    | "ARABIC"
    | "SWAHILI"
) => {
  const wordPool = WORDS_POOL[language];
  const wordsToPlace = Math.min(level * 5, wordPool.length); // Increase words per level
  const shuffled = [...wordPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, wordsToPlace);
};

const generateGrid = (words: string[]) => {
  let grid = Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(""));
  let placedWords: Set<string> = new Set();

  words.forEach((word) => {
    let placed = false;
    for (let attempt = 0; attempt < 100 && !placed; attempt++) {
      let row = Math.floor(Math.random() * GRID_ROWS);
      let col = Math.floor(Math.random() * GRID_COLS);
      let direction = Math.random() > 0.5 ? "H" : "V";

      if (
        direction === "H" &&
        col + word.length <= GRID_COLS &&
        word.split("").every((_, i) => !grid[row][col + i])
      ) {
        word.split("").forEach((letter, i) => (grid[row][col + i] = letter));
        placedWords.add(word);
        placed = true;
      } else if (
        direction === "V" &&
        row + word.length <= GRID_ROWS &&
        word.split("").every((_, i) => !grid[row + i][col])
      ) {
        word.split("").forEach((letter, i) => (grid[row + i][col] = letter));
        placedWords.add(word);
        placed = true;
      }
    }
  });

  // Fill remaining cells with random letters
  for (let i = 0; i < GRID_ROWS; i++) {
    for (let j = 0; j < GRID_COLS; j++) {
      if (!grid[i][j]) {
        grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }

  return { grid, placedWords };
};

const PuzzleGame: React.FC = () => {
  const initialGridData: string[][] = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
    // Add more rows and columns as needed
  ];

  const [level, setLevel] = useState(1);
  const [language, setLanguage] = useState<
    | "ENGLISH"
    | "HAUSA"
    | "IGBO"
    | "YORUBA"
    | "BENIN"
    | "TIV"
    | "IGALA"
    | "IKWERRE"
    | "FULANI"
    | "FRENCH"
    | "SPANISH"
    | "CHINESE"
    | "ARABIC"
    | "SWAHILI"
  >("ENGLISH");
  const [words, setWords] = useState<string[]>([]);
  const [gridData, setGridData] =
    useState<React.ReactNode[][]>(initialGridData);
  const [selectedLetters, setSelectedLetters] = useState<[number, number][]>(
    []
  );
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const newWords = getRandomWords(level, language);
    const { grid, placedWords } = generateGrid(newWords);
    setWords(Array.from(placedWords));
    setGridData(grid);
    setFoundWords(new Set());
    setMessage("");
  }, [level, language]);

  const handleLetterClick = (row: number, col: number) => {
    const index = selectedLetters.findIndex(([r, c]) => r === row && c === col);
    if (index === -1) {
      // Select the letter
      setSelectedLetters((prev) => [...prev, [row, col]]);
    } else {
      // Unselect the letter
      setSelectedLetters((prev) =>
        prev.filter(([r, c]) => !(r === row && c === col))
      );
    }
  };

  const handleSubmitWord = () => {
    const selectedWord = selectedLetters
      .map(([r, c]) => gridData[r][c])
      .join("");

    if (words.includes(selectedWord)) {
      setFoundWords((prev) => new Set([...prev, selectedWord]));
      setMessage(`Word found: ${selectedWord}`);

      // Update grid with red color and underline for the found word
      const newGridData: React.ReactNode[][] = [...gridData];
      selectedLetters.forEach(([r, c]) => {
        newGridData[r][c] = (
          <span style={{ color: "#ff0000", textDecoration: "line-through" }}>
            {gridData[r][c]}
          </span>
        );
      });
      setGridData(newGridData);
    } else {
      setMessage("No word found");
    }

    // Clear selected letters
    setSelectedLetters([]);
  };

  useEffect(() => {
    console.log("Found Words:", foundWords.size); // Logs the number of found words
    console.log("Total Words:", words.length); // Logs the total number of words to find

    const wordsLength = words?.length;
    const foundWordsSize = foundWords?.size;

    if (wordsLength > 0) {
      if (foundWordsSize === wordsLength) {
        console.log("All words found!");
        setShowModal(true);
      }
    }
  }, [foundWords, words.length]);

  const handleNextLevel = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Assert that e.target.value is one of the valid values
    setLanguage(
      e.target.value as
        | "ENGLISH"
        | "HAUSA"
        | "IGBO"
        | "YORUBA"
        | "BENIN"
        | "TIV"
        | "IGALA"
        | "IKWERRE"
        | "FULANI"
        | "FRENCH"
        | "SPANISH"
        | "CHINESE"
        | "ARABIC"
        | "SWAHILI"
    );
  };

  return (
    <div className="puzzle-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          maxWidth: 800,
        }}
      >
        <div>
          <h1 className="player-turn-h1">Puzzle Game</h1>
        </div>
        <div
          className="player-turn"
          style={{
            alignSelf: "flex-end",
            backgroundColor: `var(--accent-color)`,
            color: "#222",
            padding: 16,
            borderRadius: 16,
            fontSize: 16,
          }}
        >
          Level - {level}
        </div>
      </div>

      {/* Language Select Input */}

      {/* Display Words to be Found */}

      {message && (
        <div style={{ color: "red", fontWeight: "bold" }}>{message}</div>
      )}

      <div className="game-media-new">
        <div
          className="score-board"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <div style={{ marginBottom: 48, textAlign: "center" }}>
              <label
                style={{
                  color: "var(--background-color)",
                  textAlign: "center",
                }}
              >
                Select Language:{" "}
              </label>
              <br />
              <select
                value={language}
                onChange={handleChange}
                style={{
                  padding: 16,
                  minWidth: 200,
                  background: "transparent",
                  color: "var(--background-color)",
                  fontFamily: "var(--fontFamily)",
                  border: `1px var(--background-color) solid`,
                  borderRadius: 12,
                }}
              >
                <option value="ENGLISH">English</option>
                <option value="HAUSA">Hausa</option>
                <option value="IGBO">Igbo</option>
                <option value="YORUBA">Yoruba</option>
                <option value="BENIN">Benin</option>
                <option value="TIV">Tiv</option>
                <option value="IGALA">Igala</option>
                {/* <option value="ARABIC">Arabic</option> */}
                <option value="IKWERRE">Ikwerre</option>
                <option value="FULANI">Fulani</option>
                {/* <option value="CHINESE">Chinese</option> */}
                <option value="SWAHILI">Swahili</option>
                <option value="FRENCH">French</option>
              </select>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#4B4B4B",
              padding: 12,
              borderRadius: 24,
            }}
          >
            <h4>Words to Find:</h4>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gap: "10px",
                padding: 12,
              }}
            >
              {words.map((word, index) => (
                <li
                  key={index}
                  style={{
                    borderRadius: "4px",
                  }}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleSubmitWord}
            style={{
              marginTop: 24,
              borderRadius: 2000,
              fontSize: 17,
              fontWeight: "bold",
              backgroundColor: "#1E1E1E",
              color: "#fff",
            }}
          >
            Submit Word
          </button>
        </div>

        <div
          style={{
            padding: 16,
            backgroundColor: "#ffffff16",
            borderRadius: 36,
            paddingTop: 32,
            paddingBottom: 32,
          }}
        >
          <div className="grid">
            {gridData.map((row, rowIndex) => (
              <div key={rowIndex} className="grid-row">
                {row.map((letter, colIndex) => (
                  <span
                    key={colIndex}
                    className={`grid-cell ${
                      selectedLetters.some(
                        ([r, c]) => r === rowIndex && c === colIndex
                      )
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleLetterClick(rowIndex, colIndex)}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-puzzle-game">
          <div className="modal-content-puzzle-game">
            <h3>Congratulations!</h3>
            <p>You've completed Level {level}.</p>
            <button onClick={handleNextLevel}>Go to Level {level + 1}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
