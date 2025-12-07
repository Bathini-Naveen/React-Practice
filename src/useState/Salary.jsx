const Salary = ({salaryamount,infun,defun}) => {
  return (
    <div>
        <h1>Salary - {salaryamount} </h1>
        <button onClick={infun}>Increment Salary</button>
        <button onClick={defun}>Decrement Salary</button>
    </div>
  )
}

export default Salary