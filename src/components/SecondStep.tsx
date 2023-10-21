import { useEffect, useState } from 'react'
import { Element, SkeletonElement } from '.'
import { ELEMENTS } from '../enums/elements'
import { shuffle } from '../util/shuffle'

interface Props {
  selectedElement: ELEMENTS | undefined
}

export function SecondStep (props: Props) {
  const { selectedElement } = props
  const [computerChoice, setComputerChoice] = useState<ELEMENTS>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      handleComputerChoice()
      setIsLoading(false)
    }, 2000)
  }, [])

  const handleComputerChoice = () => {
    const [result] = shuffle([ELEMENTS.PAPER, ELEMENTS.ROCK, ELEMENTS.SCISSORS])
    setComputerChoice(result as ELEMENTS)
  }

  const determineWinner = () => {
    if (selectedElement === computerChoice) return 'Tie'
    if (selectedElement === ELEMENTS.PAPER && computerChoice === ELEMENTS.ROCK) return 'You win'
    if (selectedElement === ELEMENTS.ROCK && computerChoice === ELEMENTS.SCISSORS) return 'You win'
    if (selectedElement === ELEMENTS.SCISSORS && computerChoice === ELEMENTS.PAPER) return 'You win'
    return 'You lose'
  }

  return (
    <div>
      <div className='grid grid-cols-2 grid-rows-[auto auto] mb-10'>
        <div className='mx-auto'>
          <Element iconName={selectedElement} />
        </div>
        {isLoading
          ? <SkeletonElement />
          : <div className='mx-auto'><Element iconName={computerChoice} /></div>}
        <h2 className='text-white uppercase tracking-widest mt-4 text-center'>You picked</h2>
        <h2 className='text-white uppercase tracking-widest mt-4 text-center'>The house picked</h2>
      </div>
      {
        !isLoading &&
          <>
            <h1 className='text-white uppercase mt-4 text-center text-5xl font-bold mb-5'>{determineWinner()}</h1>
            <button className='uppercase tracking-widest text-center bg-white text-dark-text py-2 px-10 rounded-md mx-auto block'>Play again</button>
          </>
      }
    </div>
  )
}
