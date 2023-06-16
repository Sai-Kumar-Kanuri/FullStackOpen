import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"
import React, { useEffect, useState } from "react";

function App() {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
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




    // const parts=['Fundamentals of React','Using props to pass data','State if component'];
    // const caTRESWAZXDSAZexercises=[10,7,14];
    return (
        <div>
            <Header course={course.name} />

            {/* names.map(element , ()=>{
        <Content parts={Element.part} exercises={Element.exercises}/>
      }) */}

            <Content parts={course.parts} />

            <Total total={course.parts} />
        </div>
    );
}

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right) 
//   }


//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)

//     setTotal(left + right)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>

//       <p>total {total}</p>
//     </div>
//   )
// }
export default App;
