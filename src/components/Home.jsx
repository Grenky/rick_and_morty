import '../styles/Home.css';
import Nav from './Nav';
import React from 'react';
import Error from './Error';
import ErrorBoundary from './ErrorBoundary';

function Home() {
    return(
        
        <div className='home'>
            <Nav />
            <ErrorBoundary>
                <Error /> 
            </ErrorBoundary>
        </div>
    )
}

export default Home;