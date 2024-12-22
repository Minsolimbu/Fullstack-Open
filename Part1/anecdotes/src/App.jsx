import React,{useState} from "react";


const App = () =>{
  const [selected, setSelected] = useState(0)
  const [vote,setVote] = useState(new Array(8).fill(0))
  const [maxVote, setMaxVote] = useState({vote:0, index:0})

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
    const maxV = Math.max(...copy)
    const indx = copy.indexOf(maxV)
    setMaxVote({vote:maxV, index: indx})
  }


  return(
    <>
    <h2>{anecdotes[selected]}</h2>
    <h2>Has {vote[selected]} Votes</h2>
    <button onClick={voteCount}>
      vote
    </button>
    <button onClick={randomNumber}>
      next anecodte
    </button><br/><br/>
    <h2>Anecdote with most votes</h2>
    <h3> {anecdotes[maxVote.index]}</h3>
    <h3> Has {maxVote.vote} Vote</h3>
    </>
  )
}

export default App