import { cloudinaryImages } from '../constants'

export const LogoBG = ({ className }) => {
  return (
    <figure>
      <img className={className} src={cloudinaryImages.logo.landscape.white} alt='Logo Beyond Game' />
    </figure>
  )
}
