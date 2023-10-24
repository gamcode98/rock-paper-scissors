import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export interface PointsContextType {
  storedValue: number
  savePoints: (value: number) => void
}

export const PointsContext = createContext<PointsContextType>({
  storedValue: 0,
  savePoints: () => {}
})

export const PointsProvider = ({ children }: { children: JSX.Element }) => {
  const [points, setPoints] = useState<number>(0)
  const { setValue, storedValue } = useLocalStorage('points', points)

  const savePoints = (value: number) => {
    const newPoints = points + value
    setPoints(newPoints)
    setValue(newPoints)
  }

  return (
    <PointsContext.Provider value={{ storedValue, savePoints }}> {children} </PointsContext.Provider>
  )
}
