import { ButtonsNav } from './ButtonsNav'
import { LogoBG } from './LogoBG'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header aria-label='Site Header' className='bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-1 md:flex md:items-center md:gap-12'>
            <a className='block text-teal-600 dark:text-teal-300' href='/'>
              <span className='sr-only'>General</span>
              <LogoBG className='h-14' />
            </a>
          </div>
          <div className='md:flex md:items-center md:gap-12'>
            <Nav
              ariaLabel='Site Nav'
              className='hidden md:block'
              ulClassName='flex items-center gap-6 text-sm'
            />
            <ButtonsNav />
          </div>
        </div>
      </div>
    </header>

  )
}
