import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import searchIcon from '../assets/search.svg'

const Navbar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <nav className={`bg-gray-800 text-white py-4 px-8 flex flex-col items-center transition-all duration-500 h-screen w-screen`}>
            <div className='flex flex-col gap-4 w-full max-w-screen-lg'>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold mr-4">Mars Rover Image Fetcher</h1>
                </div>
                <div className="flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="Select a Date"
                        className={`border border-white rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mr-2 w-full`}
                        value={selectedDate ? selectedDate.toDateString() : ''}
                        readOnly
                    />
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        className={`border border-white rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mr-2`}
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        <img alt="Search" src={searchIcon} width="40" height="40" className={`invert`}/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;