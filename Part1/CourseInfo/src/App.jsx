import React from "react"

const Header = (props) =>{
  console.log(props.name.name);
  return(
    <><h1>{props.name.name}</h1></>
  )
}

const Content = (props) =>{
  console.log(props.parts.part[0].name);
  return(
    <>
    {props.parts.part.map((value,index)=>{
     return(
    <p key={index}>
      {value.name} {value.exercises}
    </p>
     )
       })}
      </>
  )
}
const Total = (props) =>{
  props.total.part.forEach(value => console.log(value.exercises))
  let sum = 0;
  props.total.part.map((value,index)=>{
    sum += value.exercises;
  })
return(
  <>
   <p>{sum}</p>
  </>
)
}

const App = () => {
const course = {
  name: "Half Stack application development",
 part: [{
  name: 'Fundamentals of React',
  exercises: 10
},
 {
  name: 'Using props to pass data',
  exercises: 7
},
{
  name: 'State of a component',
  exercises: 14
}
]
}


  return (
    <div>
      <Header name= {course} />
      <Content parts = {course}/>
      <Total total = {course} />

    </div>
  )
}

export default App
