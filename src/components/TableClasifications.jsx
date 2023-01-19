export const TableClasifications = () => {
  return (
    <div className='flex justify-center'>
      <div
        className='overflow-hidden overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700'
      >
        <table
          className='min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700'
        >
          <thead className='bg-gray-100 dark:bg-gray-800'>
            <tr>
              <th
                className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'
              >
                #
              </th>
              <th
                className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'
              >
                Equipo
              </th>
              <th
                className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'
              >
                Puntos
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
            <tr>
              <td
                className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
              >
                1
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                LEVIATÁN
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                12
              </td>
            </tr>

            <tr>
              <td
                className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
              >
                2
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                KRÜ Esports
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                9
              </td>
            </tr>

            <tr>
              <td
                className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
              >
                3
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                Evil Geniuses
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                6
              </td>
            </tr>
            <tr>
              <td
                className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
              >
                4
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                Sentinels
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                6
              </td>
            </tr>
            <tr>
              <td
                className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
              >
                5
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                MIBR
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                7
              </td>
            </tr>
            <tr>
              <td
                className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
              >
                6
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                Cloud9
              </td>
              <td
                className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
              >
                4
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
