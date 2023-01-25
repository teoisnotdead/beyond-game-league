import { Button } from './Button'

export const News = ({ isNew, title, date }) => {
  return (
    <div className='max-w-xs rounded-lg bg-gray-800 shadow-md duration-200 hover:scale-105 hover:shadow-xl my-3 border-b-4 border-blue-500'>
      <img src='https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd' alt='People' className='w-full object-cover h-32 sm:h-48 md:h-64' />
      <div className='p-4 md:p-6'>
        <p className='text-blue-500 font-semibold text-xs mb-1 leading-none'>
          {isNew}
        </p>
        <h3 className='font-semibold mb-2 text-xl leading-tight sm:leading-normal'>
          {title}
        </h3>
        <div className='text-sm flex items-center'>
          <p className='leading-none'>
            {date}
          </p>
        </div>
        <div className='flex justify-end mt-4'>
          <Button className='inline-flex items-center my-3 py-1 px-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800 border border-blue-100'>
            Leer
            <svg aria-hidden='true' className='ml-2 mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' /></svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
