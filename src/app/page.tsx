'use client';
// pages/index.tsx
// pages/index.tsx
import React, { useState } from 'react';
import SkeletonBlock from './components/SkeletonBlock';

const Home: React.FC = () => {
  const [blocks, setBlocks] = useState<{ width: number; height: number }[]>([{ width: 50, height: 50 }]);

  const addBlock = () => {
    setBlocks([...blocks, { width: 50, height: 50 }]);
  };

  const deleteBlock = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

  const updateSize = (index: number, width: number, height: number) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { width, height };
    setBlocks(newBlocks);
  };

  return (
    <div>
      <button onClick={addBlock}>Voeg blok toe</button>
      {blocks.map((block, index) => (
        <SkeletonBlock
          key={index}
          initialWidth={block.width}
          initialHeight={block.height}
          onDelete={() => deleteBlock(index)}
          onUpdateSize={(newWidth, newHeight) => updateSize(index, newWidth, newHeight)}
        />
      ))}
    </div>
  );
};

export default Home;
