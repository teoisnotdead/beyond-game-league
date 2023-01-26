import { useState } from 'react'
import { Button } from './Button'

export const ButtonsNav = () => {
  const [darkMode, setDarkMode] = useState(true)

  const classDarkMode = `rounded p-2 transition ${darkMode ? 'bg-gray-100 text-gray-600 hover:text-gray-600/75' : 'dark:bg-gray-800 dark:text-white dark:hover:text-white/75'}`
  const classLoginBtn = `rounded-md px-5 py-2.5 text-sm font-medium shadow ${darkMode ? 'bg-teal-600 text-white' : 'dark:hover:bg-teal-500'}`

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='flex items-center gap-4'>
      <div className='sm:flex sm:gap-4'>
        <Button className={classLoginBtn}>Acceder</Button>
      </div>

      <div className='block md:hidden'>
        <button
          className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      <div className='flex justify-center'>
        <Button
          fn={handleDarkMode}
          className={classDarkMode}
        >
          {darkMode ? '🌞' : '🌚'}
        </Button>
      </div>
    </div>
  )
}
