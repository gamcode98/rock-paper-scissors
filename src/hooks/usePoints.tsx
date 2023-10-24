import { useContext } from 'react'
import { PointsContext, PointsContextType } from '../context/StepPoints'

export const usePoints = (): PointsContextType => useContext(PointsContext)
