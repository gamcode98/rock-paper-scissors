import { usePoints } from "../hooks/usePoints"

export function Header () {
  const { points } = usePoints()

  return (
    <header className='flex justify-between items-center border-4 border-header-outline rounded-lg py-4 pl-8 pr-4 mt-4 mb-12'>
      <div className='text-white uppercase text-2xl font-bold'>
        <h2 className='-mb-2'>Rock</h2>
        <h2 className='-mb-2'>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className='text-dark-text bg-white uppercase w-fit p-4 rounded px-6 text-center'>
        <p className='text-xs tracking-widest'>Score</p>
        <p className='text-5xl'>{points}</p>
      </div>
    </header>
  )
}
