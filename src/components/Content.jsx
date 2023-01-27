import { News } from './News.jsx'
import { PreviousNextMatches } from './PreviousNextMatches.jsx'
import { TableLeaderboard } from './TableLeaderboard.jsx'
import { Twitch } from './Twitch.jsx'
import { cloudinaryImages } from '../constants'

export const Content = () => {
  return (
    <>
      <main className='my-2 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-7 py-5 px-3'>
        <News imgNews={cloudinaryImages.news.general} isNew='Nuevo' title='Mejores jugadas fecha 4' date='21 Enero 2023' />
        <News imgNews={cloudinaryImages.news.valorant} isNew='Nuevo' title='Notas de la versión 6.01' date='18 Enero 2023' />
        <News imgNews={cloudinaryImages.news.general} isNew='Nuevo' title='Gana Leviatán' date='17 Enero 2023' />
        <div className='grid grid-cols-2'>
          <TableLeaderboard />
          <div>
            <PreviousNextMatches hasScore={false} title='Próximos partidos' date='Fecha 4' />
            <PreviousNextMatches title='Últimos partidos' date='Fecha 3' />
          </div>
        </div>
        <Twitch />
      </main>
    </>
  )
}
