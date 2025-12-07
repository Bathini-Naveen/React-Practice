import { Component } from "react";
import Unmount from "./Unmount";

class LifeCyclePhases extends Component{
    constructor(){
        super()
        console.log("Constructor is invoked");
        this.state={
            count:0,
        }
    }
    componentDidMount() {
        console.log("componentDidMount is invoked");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is Invoked");
    }
    render() {
        console.log("render is Invoked");
        return <>
        <h1>LifeCycle Phases</h1>
        <h1>count-{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        {this.state.count<5 && <Unmount/>}
        </>
    }
}
export default LifeCyclePhases