import { teams } from '../constants'

export const NextMatches = () => {
  return (
    <div className='w-full max-w-sm p-5 m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col items-center pb-10'>
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Próximos partidos</h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>Fecha 5</span>
        <div className='flex mt-4 space-x-8 md:mt-6'>
          <img
            className='w-8'
            src={teams[0].logo}
            alt={teams[0].name}
          />
          <span className='text-xl text-gray-500 dark:text-gray-400'>VS</span>
          <img
            className='w-8'
            src={teams[1].logo}
            alt={teams[1].name}
          />
        </div>
        <div className='flex mt-4 space-x-8 md:mt-6'>
          <img
            className='w-8'
            src={teams[2].logo}
            alt={teams[2].name}
          />
          <span className='text-xl text-gray-500 dark:text-gray-400'>VS</span>
          <img
            className='w-8'
            src={teams[3].logo}
            alt={teams[3].name}
          />
        </div>
        <div className='flex mt-4 space-x-8 md:mt-6'>
          <img
            className='w-8'
            src={teams[4].logo}
            alt={teams[4].name}
          />
          <span className='text-xl text-gray-500 dark:text-gray-400'>VS</span>
          <img
            className='w-8'
            src={teams[5].logo}
            alt={teams[5].name}
          />
        </div>
      </div>
    </div>
  )
}
