import { teams } from '../constants'

export const TableLeaderboard = () => {
  return (
    <div className='flex justify-center'>
      <div
        className='overflow-hidden overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700'
      >
        <table
          className='w-full divide-y divide-gray-200 text-sm dark:divide-gray-700'
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
            {teams.map((team) => (
              <tr key={team.position}>
                <td
                  className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
                >
                  {team.position}
                </td>
                <td
                  className='flex justify-center px-4 py-2 text-gray-700 dark:text-gray-200'
                >
                  <img
                    className='w-10'
                    src={team.logo}
                    alt={team.name}
                  />
                </td>
                <td
                  className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'
                >
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
