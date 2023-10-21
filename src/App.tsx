import { useState } from 'react'
import { Header, FirstStep, Rules, Container, SecondStep } from './components'
import { useStep } from './hooks/useStep'
import { ELEMENTS } from './enums/elements'

function App () {
  const { step } = useStep()
  const [selectedElement, setSelectedElement] = useState<ELEMENTS | undefined>()

  const steps = {
    1: <FirstStep setSelectedElement={setSelectedElement} />,
    2: <SecondStep selectedElement={selectedElement} />
  }

  return (
    <Container>
      <Header />
      {steps[step as keyof typeof steps]}
      <Rules />
    </Container>
  )
}

export default App
