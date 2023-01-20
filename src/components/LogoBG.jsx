import { cloudinaryLogos } from '../constants'

export const LogoBG = ({ className }) => {
  return (
    <figure>
      <img className={className} src={cloudinaryLogos.LANDSCAPE.WHITE} alt='Logo Beyond Game' />
    </figure>
  )
}
