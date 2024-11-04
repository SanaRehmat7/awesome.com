import React from 'react';

const Card = ({ title, codeSnippet, githubLink }) => {
    return (
        <div className="border p-4 rounded-md bg-white shadow-lg">
            <h2 className="font-semibold mb-2">{title}</h2>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{codeSnippet}</pre>
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 block mt-4"
            >
                GitHub
            </a>
        </div>
    );
};

export default Card;
