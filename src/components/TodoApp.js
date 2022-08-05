import React from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development enviroment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    render() {
        return (
            <div>
                <Header/>
                <ul>
                    <Todos todos={this.state.todos} />
                </ul>
            </div>
        );
    }
}
export default TodoApp;