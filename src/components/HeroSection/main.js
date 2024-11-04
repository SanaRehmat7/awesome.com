import React from 'react';
import Card from './Card';
import Sidebar from '../Sidebar';

const MainContent = () => {
    return (
        <main className="w-full min-h-[80vh] bg-slate-100 flex p-6 md:p-10">
            <div className="flex-grow">
                <div className="text-center mb-6 md:mb-10">
                    <h1 className="text-1xl md:text-4xl font-bold">Write Components with Code and Markup</h1>
                    <p className="text-lg md:text-1xl mt-2">This is a simple web application built with React.
                    React provides reusability of components, fast rendering, code stability, high performance, 
                    and extensive community support.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mx-auto">
                    <Card
                        title="Sample Code 1"
                        codeSnippet="console.log('Hello, World!');"
                        githubLink="https://github.com/your-repo/sample-code-1"
                    />
                    <Card
                        title="Sample Code 2"
                        codeSnippet="const sum = (a, b) => a + b;"
                        githubLink="https://github.com/your-repo/sample-code-2"
                    />
                    <Card
                        title="Sample Code 3"
                        codeSnippet="let x = 5;"
                        githubLink="https://github.com/your-repo/sample-code-3"
                    />
                    <Card
                        title="Sample Code 4"
                        codeSnippet="function greet() { console.log('Hello!'); }"
                        githubLink="https://github.com/your-repo/sample-code-4"
                    />
                </div>
            </div>
            <Sidebar />
        </main>
    );
};

export default MainContent;
