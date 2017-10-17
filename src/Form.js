import React from 'react'

const Form = (props) => {
  return (
    <div id="form">
      <form id="addForm" onSubmit={props.addCounter}>
        <label>Count By: <input type="text" name="counter"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {props.totalCount()}
      </div>
      <form id="removeForm" onSubmit={props.removeCounter}>
        <label>Remove at: <input type="text" name="counter"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
