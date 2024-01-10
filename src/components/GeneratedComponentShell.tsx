export default function GeneratedComponentShell({ generatedJSX, width, height }: { generatedJSX: string, width: number, height: number }) {
    const FunctionalComponentShell = `import React from 'react'\n\nexport default function GeneratedComponent() {\n    return (\n        <div style={{ width: ${width}px, height: ${height}px }}>\n            ${generatedJSX}\n        </div>\n    )\n}\n`;

    return (
        <div className="mockup-code">
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            <pre data-prefix="$"><code>{FunctionalComponentShell}</code></pre>
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
        </div>
    )
}