import React, { useEffect, useState } from 'react';
import './Gallery.css';

function Gallery() {
  // Original positions of puzzle pieces
  const originalPieces = [
    { id: 1, style: { backgroundPosition: '0% 0%' }, correctIndex: 0 },
    { id: 2, style: { backgroundPosition: '50% 0%' }, correctIndex: 1 },
    { id: 3, style: { backgroundPosition: '100% 0%' }, correctIndex: 2 },
    { id: 4, style: { backgroundPosition: '0% 50%' }, correctIndex: 3 },
    { id: 5, style: { backgroundPosition: '50% 50%' }, correctIndex: 4 },
    { id: 6, style: { backgroundPosition: '100% 50%' }, correctIndex: 5 },
    { id: 7, style: { backgroundPosition: '0% 100%' }, correctIndex: 6 },
    { id: 8, style: { backgroundPosition: '50% 100%' }, correctIndex: 7 },
    { id: 9, style: { backgroundPosition: '100% 100%' }, correctIndex: 8 }
  ];

  // Shuffle the pieces initially
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    setPieces(shuffleArray([...originalPieces]));
  }, []);

  // Shuffle function
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Handle drag start
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('pieceIndex', index);
  };

  // Handle drop
  const handleDrop = (e, dropIndex) => {
    const draggedIndex = e.dataTransfer.getData('pieceIndex');
    const draggedPiece = pieces[draggedIndex];
    const dropPiece = pieces[dropIndex];

    // Swap pieces
    const newPieces = [...pieces];
    newPieces[draggedIndex] = dropPiece;
    newPieces[dropIndex] = draggedPiece;

    setPieces(newPieces);

    // Check if the puzzle is solved
    if (isPuzzleSolved(newPieces)) {
      alert('Puzzle Solved!');
    }
  };

  // Check if the puzzle is solved
  const isPuzzleSolved = (pieces) => {
    return pieces.every((piece, index) => piece.correctIndex === index);
  };

  return (
    <div>
      <h2>Draggable Puzzle Gallery</h2>
      <div className="puzzle-gallery">
        {pieces.map((piece, index) => (
          <div
            key={piece.id}
            className="puzzle-piece"
            style={{ backgroundImage: `url('images/tattoo_puzzle.jpg')`, ...piece.style }}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;