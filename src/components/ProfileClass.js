import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:1
        };
        console.log("constructor");
    }
    componentDidMount() {
        //call APIS he
        console.log("componentDidMount");
    }
    render() {
        return (
            <>
            {console.log("Render")}
            <div>profile from CLASS based component</div>
            <p>My name is 
                <h2>{this.props.name}</h2>
                <p>Count: {this.state.count}</p>
                </p>
                <button onClick={() => {
                   //WE DO NOT MUTATE STATE VARIABLES DIRECTLY 
                    this.setState({
                        count:1,
                        count2:2
                    });
                   
                }}> set count</button>
            </>
        )
    }
}
export default Profile; 