// import React from 'react'

// function Article(props) {
//   return (
//     <div>
//       <h1>Article</h1>
//        <h3>{props.title}</h3> 
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
//     </div>
//   )
// }

// export default Article

import React from 'react'
import { add as addition } from '../utility'

class Article extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        count:0
      }
    //   console.log(addition(2,3))
    }
    handleClick=()=>{
        // this.state.count=this.state.count+1
        // console.log(this.state.count)
        this.setState({count: this.state.count+1})
    }

    handleDecrement=()=>{
        this.setState({count: this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Article</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleDecrement}>Increment</button>
        <h3>{this.props.title}</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
      </div>
    )
  }
}

export default  Article

