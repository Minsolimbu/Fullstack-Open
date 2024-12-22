import React,{useState} from "react"

const Title = ({title})=>{
  return(
     <h1>{title}</h1>
  )
}

const Btn = ({onHanldeClick, text})=>{
return(
<>
<button onClick={onHanldeClick}>
  {text}
</button>
</>
)
}

const Stats = ({value, title, sum})=>{
  if(sum === 0){
    return(
      <>
      </>
    )
  } else
  return(
    <>
    <p>{title} {value}</p>
    </>
  )

}

const CombineStats = ({total,average, positive,sum })=> {
  if(sum === 0){
    return(
      <>
      <p>No Geedback Given</p>
      </>
    )
  } else
  return(
    <>
    <p>
      Total: {total} <br/>
      Average: {average}<br/>
      Positive: {positive} %
    </p>
    </>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const goodHandleClick = ()=> setGood(prevGood => prevGood + 1)
  const neutralHandleClick = ()=> setNeutral(prevGood => prevGood + 1)
  const badHandleClick = ()=> setBad(prevGood => prevGood + 1)

  let sum = good + neutral + bad
  let average = (good + neutral + bad) / 3
  let positive = (sum === 0) ? 0 : (good / sum) * 100;



  return (
<>
<Title title= "Give Feedback"/>
<Btn onHanldeClick={goodHandleClick} text="Good" />
<Btn onHanldeClick={neutralHandleClick} text="Neutral" />
<Btn onHanldeClick={badHandleClick} text="Bad" />
<Title title= "Statistics"/>
<Stats title = "good" value={good} sum ={sum}/>
<Stats title = "neutral" value={neutral} sum ={sum}/>
<Stats title = "bad" value={bad} sum ={sum}/>
<CombineStats total = {sum} average = {average} positive = {positive} sum ={sum}/>



</>
  )
}

export default App