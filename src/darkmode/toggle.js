import React from 'react';
import { ThemeContext } from './themeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-300 shadow-none rounded-full focus:outline-none text-lg hover:bg-[#fafafa]  hover:opacity-75 px-2 py-2 outline-none ring-transparent cursor-pointer"
        >
                   <span style={{ color: theme ? "grey" : "grey" }}>
                    <img src={require('../images/moon.png')} className="w-8"/>
                   </span>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="focus:outline-none rounded-full hover:bg-[#e2e8f0] hover:opacity-75 px-2 py-2 shadow-none text-lg  outline-none ring-transparent cursor-pointer"
        >
           <span style={{ color: theme ? "orange" : "orange" }}>
            <img src={require('../images/sunlight.png')} className="w-8"/>
           </span>
        </button>
      )}
    </div>
  );
};

export default Toggle;