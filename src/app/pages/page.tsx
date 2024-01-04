import MarkdownRender from "../components/MarkdownRenderer";

export default function MyComponent() {
    const mdString = `
    # This is a heading

    This is a paragraph.

    \`\`\`javascript
    const foo = 'bar';
    console.log(foo);
    \`\`\`
    `;

    return <MarkdownRender mdString={mdString} />;
}