'use client';
// pages/index.tsx
import React, { useState } from 'react';
import SkeletonBlock from '../components/SkeletonBlock';
import GeneratedComponentShell from '../components/GeneratedComponentShell';

export default function Home() {
    const [blocks, setBlocks] = useState<{ width: number; height: number }[]>([{ width: 50, height: 50 }]);
    const [generatedJSX, setGeneratedJSX] = useState<string | null>(null);

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

    const generateJSX = () => {

        const jsx = blocks.map((block, index) => (
            `<div key=${index} className="flex" style={{ width: ${block.width}px, height: ${block.height}px }} />`
        )).join('\n');

    };

    const generateComponent = () => {
        const jsx = blocks.map((block, index) => (
            `<div key=${index} className="flex" style={{ width: ${block.width}px, height: ${block.height}px }} />`
        )).join('\n');

        setGeneratedJSX(jsx);
    }

    return (
        <div>
            <button onClick={addBlock}>Voeg blok toe</button>
            <button onClick={generateComponent}>Genereer JSX</button>
            {blocks.map((block, index) => (
                <SkeletonBlock
                    key={index}
                    initialWidth={block.width}
                    initialHeight={block.height}
                    onDelete={() => deleteBlock(index)}
                    onUpdateSize={(newWidth, newHeight) => updateSize(index, newWidth, newHeight)}
                />
            ))}

            <div>
                <h2>Generated JSX:</h2>
                <GeneratedComponentShell generatedJSX={generatedJSX} width={0} height={0} />
            </div>
        </div>
    );
};
