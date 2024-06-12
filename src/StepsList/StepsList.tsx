import { FC } from "react"
import { StepItem } from "../StepItem/StepItem"

export type StepsT = {
  date: string,
  distance: number,
}

type StepListArgs = {
  data: StepsT[],
  stepListRef: React.RefObject<HTMLInputElement>,
  onDelete: void,
  onEdit: void
}

export const StepsList: FC<StepListArgs> = ({data, stepListRef, onDelete, onEdit}) => {

  return (
    <>
      <div className="table__header" ref={stepListRef}>
        <div className="table__cell">Дата</div>
        <div className="table__cell">Расстояние</div>
        <div className="table__cell"></div>
      </div>
      <div className="table">
        {data
          .sort((a, b) => {return a.date > b.date ? -1 : 1; })
          .map(({ date, distance }) => (
            <StepItem key={date} date={date} distance={distance} onEdit={onEdit} onDelete={onDelete}/>
          ))}
      </div>
    </>
  )
}
