
const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.t}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header name={course} />
      <Content name={part1} exercises={part1} />
      <Content name={part2} exercises={part2} />
      <Content name={part3} exercises={part3} />
      <Total t={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App