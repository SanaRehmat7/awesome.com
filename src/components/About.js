// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section className="w-full min-h-screen bg-slate-100 flex flex-col items-center p-6 md:p-10 mt-10">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">About This Project</h1>
            <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
                This project is a simple web application built using React, showcasing how to create reusable components 
                and manage state effectively. The goal is to provide a platform for developers to share code snippets 
                and learn from each other.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
                <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform hover:scale-105">
                    <h2 className="font-semibold mb-2 text-2xl">Our Mission</h2>
                    <p>
                        Our mission is to foster a community of developers where knowledge is shared, and learning is 
                        encouraged. We aim to create an accessible space for both new and experienced developers to 
                        showcase their work and collaborate on projects.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform hover:scale-105">
                    <h2 className="font-semibold mb-2 text-2xl">What You Can Find Here</h2>
                    <p>
                        You will find a variety of code snippets, tutorials, and resources that can help you enhance your 
                        programming skills. Whether you're looking to improve your JavaScript knowledge, dive into React, 
                        or explore new frameworks, this site has something for everyone.
                    </p>
                </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-center mt-10 mb-4">Meet the Creator</h2>
            <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform hover:scale-105 w-full max-w-md mx-auto">
                <h3 className="font-semibold mb-2 text-xl">Your Name</h3>
                <p>
                    As a passionate developer, I love sharing knowledge and helping others learn. I believe in the power 
                    of community and collaboration in the tech industry. Feel free to connect with me on social media!
                </p>
            </div>
        </section>
    );
};

export default About;
