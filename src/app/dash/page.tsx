/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HrmIkE4mh2A
 */
import { Button } from "../../components/ui/button"

export default function Component() {
    return (
        <div className="flex flex-col h-screen bg-gray-900">
            <header className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
                <h1 className="text-lg font-semibold text-white">Visual Editor</h1>
                <div className="flex items-center space-x-2">
                    <Button className="text-white border-white" size="sm" variant="outline">
                        Save
                    </Button>
                    <Button className="bg-white text-gray-900" size="sm">
                        Export JSX
                    </Button>
                    <Button className="ml-4 bg-green-500 text-white" size="sm">
                        Add New
                    </Button>
                </div>
            </header>
            <main className="flex flex-1 overflow-hidden">
                <aside className="w-64 bg-gray-800 shadow p-4 space-y-4">
                    <h2 className="text-sm font-semibold text-white">Elements</h2>
                    <div className="flex flex-col space-y-2">
                        <Button className="text-left text-white" variant="ghost">
                            Block
                        </Button>
                        <Button className="text-left text-white" variant="ghost">
                            Paragraph
                        </Button>
                        <Button className="text-left text-white" variant="ghost">
                            Button
                        </Button>
                    </div>
                </aside>
                <section className="flex-1 p-6">
                    <div className="h-32 w-64 bg-gray-700 rounded-md shadow-inner flex items-center justify-center">
                        <p className="text-center text-gray-400">Drag and drop an element here</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

