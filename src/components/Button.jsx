export const Button = ({ children, fn, className }) => {
  return (
    <button
      onClick={fn}
      className={className}
    >
      {children}
    </button>
  )
}
