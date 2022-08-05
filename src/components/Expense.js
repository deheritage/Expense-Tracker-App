import React from 'react'

const Expense = ({income, expense}) => {
  return (
    <div>
      
      <h2>Your Balance</h2>
      <div>${income - expense}</div>


      <div>
        <div>
            <h3>Income</h3>
            <div>${income}</div>
        </div>
        <div>
            <h2>Expense</h2>
            <div>${expense}</div>
        </div>
      </div>
    </div>
  )
}

export default Expense
