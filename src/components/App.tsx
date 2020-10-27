import React from 'react'
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from "../reducers";

interface AppProps {
    todos: Todo[],
    fetchTodos() : any;
}


const App: React.FC<AppProps> = ()  => {
    return (
        <div>
            
        </div>
    )
}



const mapStateToProps = ({todos}:StoreState) : { todos : Todo[]} => {
    return { todos };

}

//redux와 연결
export const AppReal = connect(
    mapStateToProps,
    { fetchTodos }
)(App)

