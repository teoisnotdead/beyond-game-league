import { NextMatches } from './NextMatches.jsx'
import { PreviousMatches } from './PreviousMatches.jsx'
import { TableLeaderboard } from './TableLeaderboard.jsx'

export const Content = () => {
  return (
    <>
      <h1 className='text-6xl my-6 flex justify-center'>Beyond Game League</h1>
      <main className='flex justify-center'>
        <TableLeaderboard />
        <div>
          <NextMatches />
          <PreviousMatches />
        </div>
      </main>
    </>
  )
}
