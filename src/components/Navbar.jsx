import React from 'react';

const Navbar = () => {
    return (
        <nav className={`bg-gray-800 text-white py-4 px-8 flex flex-col items-center transition-all duration-500 h-screen w-screen`}>
            <div className='flex flex-col gap-4 w-full max-w-screen-lg'>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold mr-4">Mars Rover Image Fetcher</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;