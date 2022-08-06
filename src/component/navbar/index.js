import React, { useState } from 'react';
const Navbar = ({searchText}) => {
  const [text,setText] = useState('');
  const submithandler = (e) =>{
    e.preventDefault();
    searchText(text);
  }
  return (
<form className='mb-5' onSubmit={submithandler}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input  onChange={e=>setText(e.target.value)}  type="search" id="default-search" className="  block p-4 pl-10 w-full text-sm  bg-gray-50 rounded-lg border   dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white border-none hover:border-none" placeholder="Search Images" required=""/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
  );
}

export default Navbar;