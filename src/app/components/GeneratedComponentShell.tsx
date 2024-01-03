export default function GeneratedComponentShell({ generatedJSX, width, height }: { generatedJSX: string, width: number, height: number }) {
    const FunctionalComponentShell = `import React from 'react'\n\nexport default function GeneratedComponent() {\n    return (\n        <div style={{ width: ${width}px, height: ${height}px }}>\n            ${generatedJSX}\n        </div>\n    )\n}\n`;

    return (
        <pre>{FunctionalComponentShell}</pre>
    )
}