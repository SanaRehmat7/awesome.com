import React from 'react';

const Sidebar = () => {
    return (
        <aside className="hidden lg:block w-1/4 p-4">
            <div className="bg-white rounded-md shadow-md p-4">
                <h2 className="font-semibold mb-4">Important Info</h2>
                <ul className="space-y-2">
                    <li>React is a library for building user interfaces.</li>
                    <li>Components let you split the UI into independent, reusable pieces.</li>
                    <li>Props allow you to pass data from one component to another.</li>
                    <li>State lets you create components that are dynamic and interactive.</li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

