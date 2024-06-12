
export const NewStepBar = ({formRefDate, formRefDist, onSubmit}) => {
  return (
    <>
      <form className="step-form" onSubmit={onSubmit}>
        <div className="date-container step-form__element">
          <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
          <input 
          type="date" 
          className="date-field step-form__input" 
          name="date" 
          id="date" 
          ref={formRefDate}
          required
          // value="2019-07-16"
          ></input>
        </div>
        <div className="distance-container step-form__element">
          <label className="distance">Пройдено км</label>
          <input 
          type="text"
          className="distance-field step-form__input" 
          name="distance" 
          id="distance" 
          ref={formRefDist}
          required
          // value="13"
          ></input>
        </div>
        <button type="submit">OK</button>
      </form>
    </>
  )
}
