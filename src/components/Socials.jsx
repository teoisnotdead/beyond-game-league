export const Socials = ({ url, skillIcon }) => {
  return (
    <a
      target='_blank' rel='noreferrer' href={url}
      className='m-1 text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0'
    >
      <span className='transition-colors: mx-auto text-2xl text-slate-300 duration-300 hover:text-white'>
        <img className='h-9' src={'https://skillicons.dev/icons?i=' + skillIcon} />
      </span>
    </a>
  )
}
