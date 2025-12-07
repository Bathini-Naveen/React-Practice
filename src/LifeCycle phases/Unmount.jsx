import { Component } from "react";

class Unmount extends Component{
    componentWillUnmount(){
        console.log('componentWillUnmount is invoked');
    }
    render(){
        return(
            <div>Unmount</div>
        )
    }
}
export default Unmount