export const News = () => {
  return (
    <div className='max-w-xs rounded-lg bg-gray-800 shadow-md duration-200 hover:scale-105 hover:shadow-xl my-3 border-b-4 border-blue-500'>
      <img src='https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd' alt='People' className='w-full object-cover h-32 sm:h-48 md:h-64' />
      <div className='p-4 md:p-6'>
        <p className='text-blue-500 font-semibold text-xs mb-1 leading-none'>Nuevo</p>
        <h3 className='font-semibold mb-2 text-xl leading-tight sm:leading-normal'>Gana LEVIATÁN</h3>
        <div className='text-sm flex items-center'>
          <p className='leading-none'>21 Oct 2019</p>
        </div>
      </div>
    </div>
  )
}
