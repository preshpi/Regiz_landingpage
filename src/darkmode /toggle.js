import React from 'react';
import { ThemeContext } from './themeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mt-3 text-gray-300 shadow-none rounded-full focus:outline-none text-lg hover:bg-[#fafafa]  hover:opacity-75 px-3 py-2 outline-none ring-transparent cursor-pointer"
        >
                   <span style={{ color: theme ? "grey" : "grey" }}>☽</span>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mt-2 focus:outline-none rounded-full hover:bg-[#e2e8f0] hover:opacity-75 px-2 py-2 shadow-none text-lg  outline-none ring-transparent cursor-pointer"
        >
           <span style={{ color: theme ? "orange" : "orange" }}>☀︎</span>
        </button>
      )}
    </div>
  );
};

export default Toggle;
