interface Props {
  children: JSX.Element
}

export const Center = ({children}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      {children}
    </div>
  )
}