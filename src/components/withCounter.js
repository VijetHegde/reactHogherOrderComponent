import React from "react";

const UpdatedComponent = (OriginalComponent,countValue) =>{
class NewComponent extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      incrementCount = ()=>{
          this.setState(prevState =>{
              return { count: prevState.count + countValue}
          })
      }
    render(){
       return<OriginalComponent 
       count={this.state.count} 
       incrementCount={this.incrementCount}
       { ... this.props}
       /> 
       
    }
}
return NewComponent
}

export default UpdatedComponent