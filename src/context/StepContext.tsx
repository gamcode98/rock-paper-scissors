import { createContext, useState } from 'react'

export interface StepContextType {
  step: number
  setStep: (step: number) => void
}

export const StepContext = createContext<StepContextType>({
  step: 1,
  setStep: () => {}
})

export const StepProvider = ({ children }: { children: JSX.Element }) => {
  const [step, setStep] = useState<number>(1)

  return (
    <StepContext.Provider value={{ step, setStep }}> {children} </StepContext.Provider>
  )
}
