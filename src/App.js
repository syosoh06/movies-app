import React from 'react';
import MoviesList from './components/movies-list/movies-list.connector';
import './App.css';
import Header from "./components/header/header";

function App() {
    return (
        <div className="App">
            <Header/>
            <MoviesList/>
        </div>
    );
}

export default App;
