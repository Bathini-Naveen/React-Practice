
const StudentCard = ({studentsArray = [] }) => {

  return(
     <>
    {studentsArray.map((ele)=>{
        return (
            <React.Fragment key={ele.id}>
            <h1>{ele.name}</h1>
        <h2>{ele.branch}</h2>
        <button onClick={ele.score}>{ele.score>80?"Show Score":"Hide Score"}</button>
       
        </React.Fragment>
        )
    })}
  </>
  )
}

export default StudentCard