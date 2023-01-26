export const Score = ({ children, isWinner, hasScore }) => {
  const result = `text-xl ${isWinner ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`
  return (
    <>
      {hasScore
        ? (
          <span className={result}>
            {children}
          </span>
          )
        : (
          <>
          </>
          )}
    </>
  )
}
