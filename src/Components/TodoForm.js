import React, { Component} from 'react';
import {connect} from 'react-redux';
import {create_task_action_creator} from '../Store/actionCreator';


class TodoApp extends Component {
    constructor(props){
        super(props)

        this.state={
            task:""
        }

    }
    handleChange = (e) => {
        const  {value} = e.target
            this.setState({
                task:value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.create_task(this.state.task)
    }

    render(){


        return (
            <div className="container" style={{width:100,height:100,margin:100}}>
                <div className="row">
                    <form  onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                    
                        <tr>
                            <td >
                                <h1>TODO APP</h1>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <input type="text" style={{width:300,height:50}} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <button type="submit" style={{width:100,height:40,color:"black"}}>Submit</button>
                            </td>
                        </tr>
                            </tbody>
                        </table>
                    </form>
                    {/* {this.state.task && <p>{this.state.task}</p>} */}
                </div>
            </div>
        )    
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        create_task : (task)=>{dispatch(create_task_action_creator(task))}
    }
}

export default connect(null , mapDispatchToProps)(TodoApp);