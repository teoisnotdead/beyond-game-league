import { cloudinaryImages } from '../constants'

export const LogoBG = ({ className }) => {
  return (
    <figure>
      <img className={className} src={cloudinaryImages.LOGO.LANDSCAPE.WHITE} alt='Logo Beyond Game' />
    </figure>
  )
}
