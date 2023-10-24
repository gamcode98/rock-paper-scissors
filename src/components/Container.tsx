interface Props {
  children: JSX.Element[]
}
export function Container (props: Props) {
  const { children } = props

  return (
    <div className='flex flex-col justify-evenly mx-auto w-11/12 md:w-2/3 lg:w-1/3'>
      {children}
    </div>
  )
}
