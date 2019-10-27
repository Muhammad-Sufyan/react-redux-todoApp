import React, { Component } from 'react';
import {connect} from 'react-redux';
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : []
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            task : props.task
        })
    };
    render() { 
        const {task} = this.state
        return (
            <div>
                <h1>TODO LIST</h1>
                {task &&
                <ul>
                    {task.map((t,index)=>(
                        <li key={index}>
                            {t}
                        </li>
                    ))}
                </ul>}
            </div>
        );
    }
}

const mapToStateToProps = (state) => {
    console.log("akmal pagal" , state);
    return {
        task : state
    }
}

export default connect(mapToStateToProps,null)(TodoList);