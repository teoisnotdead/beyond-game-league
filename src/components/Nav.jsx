export const Nav = ({ ariaLabel, className, ulClassName }) => {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className={ulClassName}>
        <li>
          <a
            className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
            href='/'
          >
            General
          </a>
        </li>

        <li>
          <a
            className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
            href='/'
          >
            Clasificación
          </a>
        </li>

        <li>
          <a
            className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
            href='/'
          >
            Equipos
          </a>
        </li>

        <li>
          <a
            className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
            href='/'
          >
            Reglas
          </a>
        </li>

        <li>
          <a
            className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
            href='/'
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}
