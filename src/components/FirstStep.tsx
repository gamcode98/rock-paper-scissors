import { ELEMENTS } from '../enums/elements'
import { Element } from '.'
import { useStep } from '../hooks/useStep'

interface Props {
  setSelectedElement: React.Dispatch<React.SetStateAction<ELEMENTS | undefined>>
}

export function FirstStep (props: Props) {
  const { setStep } = useStep()
  const { setSelectedElement } = props

  const handleClick = (element: ELEMENTS) => {
    setSelectedElement(element)
    setStep(2)
  }

  return (
    <div className='relative'>
      <div className='relative flex flex-wrap justify-between mb-8'>
        <button onClick={() => handleClick(ELEMENTS.PAPER)}>
          <Element iconName={ELEMENTS.PAPER} />
        </button>
        <button onClick={() => handleClick(ELEMENTS.SCISSORS)}>
          <Element iconName={ELEMENTS.SCISSORS} />
        </button>
        <div className='absolute w-full h-3 bg-radial-gradient-to -translate-y-1/2 top-1/2 -z-10' />
      </div>
      <div className='mx-auto w-fit'>
        <button onClick={() => handleClick(ELEMENTS.ROCK)}>
          <Element iconName={ELEMENTS.ROCK} />
        </button>
      </div>
      <div className='absolute h-full w-3 bg-radial-gradient-to top-0 left-[30%] -rotate-[35deg] -z-10' />
      <div className='absolute h-full w-3 bg-radial-gradient-to top-0 right-[30%] rotate-[35deg] -z-10' />
    </div>
  )
}
