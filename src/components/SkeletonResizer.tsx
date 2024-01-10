'use client';
import React from 'react';
import { Resizable, ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

interface SkeletonBlockProps {
    width: number;
    onDelete: () => void;
    onResize: (width: number) => void;
}

const SkeletonBlock: React.FC<SkeletonBlockProps> = ({ width, onDelete, onResize }) => {
    return (
        <Draggable>
            <ResizableBox
                width={width}
                height={50}
                className="skeleton relative"
                onResize={(e, data) => onResize(data.size.width)}
            >
                <div className="absolute top-0 right-0 p-2 cursor-pointer" onClick={onDelete}>
                    Remove
                </div>
            </ResizableBox>
        </Draggable>
    );
};

export default SkeletonBlock;
