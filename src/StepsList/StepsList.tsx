

export const StepsList = ({data, stepListRef, onDelete, onEdit}) => {

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
          .map(({ date, distance }, index) => (
            <div className="table__row" key={index}>
              <div className="table__cell">{date}</div>
              <div className="table__cell">{distance}</div>
              <div className="table__cell">
                <button className="button_edit" onClick={() => onEdit({date, distance})}></button>
                <button className="button_delete" onClick={() => onDelete(date)}></button>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
