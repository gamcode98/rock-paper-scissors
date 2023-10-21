import { useContext } from 'react'
import { StepContext, StepContextType } from '../context/StepContext'

export const useStep = (): StepContextType => useContext(StepContext)
