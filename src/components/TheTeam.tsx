const TheTeam = () => {
    return (
      <div className="flex justify-around items-center bg-white rounded-lg shadow-2xl  p-6">
        <div className="flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <a href="https://twitter.com/tdesseyn" className="flex flex-col items-center">
            <img src="https://i.postimg.cc/zbmXxFCQ/td.png" alt="Taylor Desseyn" className="w-20 h-20 rounded-full" />
            <p className="text-indigo-600 dark:text-indigo-400">Taylor Desseyn</p>
            <p className="text-gray-800 dark:text-gray-800">vp of global community</p>
          </a>
        </div>
        <div className="flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <a href="https://twitter.com/tasonjorres" className="flex flex-col items-center">
            <img src="https://i.postimg.cc/8fNkSknB/jt.png" alt="Jason Torres" className="w-20 h-20 rounded-full" />
            <p className="text-indigo-600 dark:text-indigo-400">Jason Torres</p>
            <p className="text-gray-800 dark:text-gray-800">community evangelist</p>
          </a>
        </div>
        <div className="flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <a href="https://x.com/helenismo" className="flex flex-col items-center">
            <img src="https://i.postimg.cc/SYdSN0B0/xc.png" alt="Ximena Cruz" className="w-20 h-20 rounded-full" />
            <p className="text-indigo-600 dark:text-indigo-400">Ximena Cruz</p>
            <p className="text-gray-800 dark:text-gray-800">community evangelist</p>
          </a>
        </div>
      </div>
    );
  };
  
  export default TheTeam;