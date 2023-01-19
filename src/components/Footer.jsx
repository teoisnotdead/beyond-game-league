import { cloudinaryLogos, socialNetworks } from '../constants'
import { Socials } from './Socials'

export const Footer = () => {
  return (
    <footer aria-label='Site Footer' className='mt-auto bg-gray-100 dark:bg-gray-900'>
      <div className='flex justify-between mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className=' text-teal-600 dark:text-teal-300'>
          <figure>
            <img src={cloudinaryLogos.LANDSCAPE.WHITE} alt='Logo Beyond Game' />
          </figure>
        </div>

        <div>
          <nav aria-label='Footer Nav' className='mt-12'>
            <ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
              <li>
                <a
                  className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
                  href='/'
                >
                  General
                </a>
              </li>

              <li>
                <a
                  className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
                  href='/'
                >
                  Clasificación
                </a>
              </li>

              <li>
                <a
                  className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
                  href='/'
                >
                  Equipos
                </a>
              </li>

              <li>
                <a
                  className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
                  href='/'
                >
                  Reglas
                </a>
              </li>

              <li>
                <a
                  className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
                  href='/'
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

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
