import { News } from './News.jsx'
import { NextMatches } from './NextMatches.jsx'
import { PreviousMatches } from './PreviousMatches.jsx'
import { TableLeaderboard } from './TableLeaderboard.jsx'
import { Twitch } from './Twitch.jsx'

export const Content = () => {
  return (
    <>
      <main className='my-2 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-7 py-5 px-3'>
        <News />
        <News />
        <News />
        <div className='grid grid-cols-2'>
          <TableLeaderboard />
          <div>
            <NextMatches />
            <PreviousMatches />
          </div>
        </div>
        <Twitch />
      </main>
    </>
  )
}
