import React, { FC, ReactHTMLElement, useRef, useState } from 'react'
import './App.css'
import { NewStepBar } from './NewStepBar/NewStepBar'
import { StepsList, StepsT } from './StepsList/StepsList'


function App() {
  const [steps, setSteps] = useState<StepsT[]>([
    {
      date: "2019-07-20",
      distance: 5.7,
    },
    {
      date: "2019-07-19",
      distance: 14.2,
    },
    {
      date: "2019-07-18",
      distance: 3.4,
    }
  ]);

  const formRefDate = useRef<HTMLInputElement>(null)
  const formRefDist = useRef<HTMLInputElement>(null)
  const stepListRef = useRef<HTMLInputElement>(null)

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newDate: string = formRefDate.current?.value || ''
    const newDistance: string = formRefDist.current?.value || ''

    const distValid = /^\d+(?:\.\d+)?$|^\.\d+$/
    // console.log(distValid.test(newDistance))

    if (!distValid.test(newDistance)) {
      alert("Введено некорректное значение пройденного расстояния")
      return
    }

    for (let index = 0; index<steps.length;) {
      if (steps[index]["date"] == newDate) {
        const updateSteps = steps
        updateSteps[index]["distance"] += parseFloat(newDistance)
        setSteps([...updateSteps])
        return
      }
      index++
    }

    setSteps([...steps, {date: newDate, distance: parseFloat(newDistance)}])

    // console.log(steps)
  }

  const onDelete = (removingDate: string) => {
    const dataOnDelete = steps.filter((row) => row.date !== removingDate)
    console.log(dataOnDelete)
    setSteps(dataOnDelete)
  }

  const onEdit = (step: StepsT) => {
    formRefDate.current.value = step["date"]
    formRefDist.current.value = step["distance"].toString()
  }

  return (
    <>
      < NewStepBar formRefDate={formRefDate} formRefDist={formRefDist} onSubmit={submitHandle}/>
      < StepsList data={steps} stepListRef={stepListRef} onDelete={onDelete} onEdit={onEdit}/>
    </>
  )
}

export default App
