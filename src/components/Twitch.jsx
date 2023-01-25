import { useRef } from 'react'
import { TwitchEmbed } from 'react-twitch-embed'

export const Twitch = () => {
  const embed = useRef() // We use a ref instead of state to avoid rerenders.

  const handleReady = (e) => {
    embed.current = e
  }

  return (
    <TwitchEmbed channel='teo730__' autoplay muted withChat={false} darkMode={false} hideControls={false} onVideoReady={handleReady} />
  )
}
