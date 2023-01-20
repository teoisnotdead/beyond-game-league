import { socialNetworks } from '../constants'
import { Socials } from './Socials'
import { Nav } from './Nav'
import { LogoBG } from './LogoBG'

export const Footer = () => {
  return (
    <footer aria-label='Site Footer' className='mt-auto bg-gray-100 dark:bg-gray-900'>
      <div className='flex justify-between mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className=' text-teal-600 dark:text-teal-300'>
          <LogoBG className='h-auto' />
        </div>

        <div>
          <Nav
            ariaLabel='Footer Nac'
            className='mt-12'
            ulClassName='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'
          />

          <div className='mt-12 flex justify-center gap-6 md:gap-8'>
            {socialNetworks.map((social) => (
              <Socials key={social.name} name={social.name} url={social.url} skillIcon={social.skillIcon} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
