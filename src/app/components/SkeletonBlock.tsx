'use client'
// components/SkeletonBlock.tsx
import React, { useRef, useState, useEffect } from 'react';

interface SkeletonBlockProps {
    initialWidth: number;
    initialHeight: number;
    onDelete: () => void;
    onUpdateSize: (width: number, height: number) => void;
}

const SkeletonBlock: React.FC<SkeletonBlockProps> = ({ initialWidth, initialHeight, onDelete, onUpdateSize }) => {
    const [isResizing, setIsResizing] = useState(false);
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);
    const blockRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => {
        setIsResizing(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isResizing && blockRef.current) {
            const newWidth = e.clientX - blockRef.current.getBoundingClientRect().left;
            const newHeight = e.clientY - blockRef.current.getBoundingClientRect().top;
            setWidth(newWidth);
            setHeight(newHeight);
            onUpdateSize(newWidth, newHeight);
        }
    };

    const handleMouseUp = () => {
        setIsResizing(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    return (
        <div className="skeleton-block" ref={blockRef} style={{ width: `${width}px`, height: `${height}px` }}>
            <button onClick={onDelete}>Verwijder</button>
            <div className="resizer" onMouseDown={handleMouseDown}></div>
        </div>
    );
};

export default SkeletonBlock;
