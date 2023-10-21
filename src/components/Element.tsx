import { ELEMENTS } from '../enums/elements'
import { icons } from '../util'

interface Props {
  iconName: ELEMENTS | undefined
}

export function Element (props: Props) {
  const { iconName = 'ups, something went wrong' } = props

  const gradients = {
    scissors: 'from-scissors-gradient-from to-scissors-gradient-to',
    paper: 'from-paper-gradient-from to-paper-gradient-to',
    rock: 'from-rock-gradient-from to-rock-gradient-to'
  }

  return (
    <div className={`bg-gradient-to-t ${gradients[iconName as keyof typeof gradients]} rounded-full w-36 h-36 flex items-center justify-center shadow-[inset_0_-18px_0px_-12px_rgba(0,0,0,0.3)]`}>
      <div className='p-4 bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-[inset_0_20px_0px_-14px_rgba(0,0,0,0.1)]'>
        <img src={icons[iconName as keyof typeof icons]} alt={iconName} />
      </div>
    </div>
  )
}
