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
      {total} <br/>
      {average}<br/>
      {positive} %
    </p>
    </>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [vote,setVote] = useState(new Array(8).fill(0))
  const [max, setMax] = useState(0)


  const goodHandleClick = ()=> setGood(prevGood => prevGood + 1)
  const neutralHandleClick = ()=> setNeutral(prevGood => prevGood + 1)
  const badHandleClick = ()=> setBad(prevGood => prevGood + 1)

  let sum = good + neutral + bad
  let average = (good + neutral + bad) / 3
  let positive = (sum === 0) ? 0 : (good / sum) * 100;


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  

  let randomNumber = () =>{
    let ran =  Math.floor(Math.random() * 8)
    setSelected(ran)
    console.log(selected)
  }


  const voteCount = ()=>{
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    console.log(vote)
    let max = 0
    copy.forEach((value)=>{
      if(value > max){
        max = value
      }
    })
    setMax(max)
  }






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


<h2>{anecdotes[selected]}</h2>
<h2>Has {vote[selected]} Votes</h2>
<button onClick={voteCount}>
  vote
</button>
<button onClick={randomNumber}>
  next anecodte
</button>
<Title title= "Anecdotes with most votes"/>
<h3> {anecdotes[max]}</h3>
<h3> Has {max} Vote</h3>
</>
  )
}

export default App