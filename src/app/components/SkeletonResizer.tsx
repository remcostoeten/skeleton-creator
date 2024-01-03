'use client';
import React, { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { ResizableBox } from 'react-resizable';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const SkeletonBuilder: React.FC = () => {
    const generateJSX = () => {
        return blocks.map(block => `<div style={{width: '${block.w * 50}px', height: '50px'}}></div>`).join('\n');
    };

    const [blocks, setBlocks] = useState([
        { i: '1', x: 0, y: 0, w: 1, h: 1 },
    ]);

    const onAddBlock = () => {
        const newBlock = {
            i: (blocks.length + 1).toString(),
            x: 0,
            y: 0,
            w: 1,
            h: 1,
        };
        setBlocks([...blocks, newBlock]);
    };

    const onResize = (index: number, size: { width: number; height: number }) => {
        const updatedBlocks = blocks.map((block, i) =>
            i === index ? { ...block, w: Math.round(size.width / 50) } : block
        );
        setBlocks(updatedBlocks);
    };

    return (
        <div>
            <button onClick={onAddBlock}>Add Block</button>
            <ResponsiveReactGridLayout
                className="layout"
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={50}
                margin={[10, 10]}
            >
                {blocks.map((block, index) => (
                    <div key={block.i}>
                        <ResizableBox
                            width={block.w * 50}
                            height={block.h * 50}
                            onResize={(e, data) => onResize(index, data.size)}
                        >
                            <div className="block">Block {block.i}</div>
                        </ResizableBox>
                    </div>
                ))}
            </ResponsiveReactGridLayout>
            <pre>{generateJSX()}</pre>
        </div>
    );
};

export default SkeletonBuilder;
