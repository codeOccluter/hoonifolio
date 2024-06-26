'use client'

import { useTheme } from "next-themes"

export default function DarkModeToggleButton() {

    //theme : 현재 값을 가져오는 것 getter
    //setTheme : 현재 값을 바꾸는 것 setter
    const {theme, setTheme} = useTheme()

    return (
        <>
            <button className="inline-flex 
                            items-center 
                            bg-gray-100 
                            border-0 py-1 px-3 
                            focus:outline-none 
                            hover:bg-gray-50
                            hover:text-blue-500
                            dark:hover:text-yellow-300
                            dark:bg-slate-600
                            dark:text-slate-400
                            dark:hover:bg-slate-700
                            rounded text-base mt-4 md:mt-0"
                            type="button"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                {/* 해 */}
                <svg xmlns="http://www.w3.org/2000/svg" className="invisible dark:visible dark:w-5 h-5 w-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>

                {/* 달 */}
                <svg xmlns="http://www.w3.org/2000/svg" className="visible dark:invisible dark:w-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>

            </button>
        </>
    )
}