import React from 'react'

type StepItemT = {
  date: string, 
  distance: number, 
  onEdit: void, 
  onDelete: void
}

export const StepItem = ({date, distance, onEdit, onDelete}: StepItemT) => {
  return (
    <div className="table__row">
      <div className="table__cell">{date}</div>
      <div className="table__cell">{distance}</div>
      <div className="table__cell">
        <button className="button_edit" onClick={() => onEdit({date, distance})}></button>
        <button className="button_delete" onClick={() => onDelete(date)}></button>
    </div>
  </div>
  )
}
