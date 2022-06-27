import React from 'react';
import './App.css';
import CircleButton from './components/main';

function App() {
    return (
        <main className='main'>
            <CircleButton inside="⭐" />

            <p className="question">How did we do?</p>
            <p className="desc">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className="button-row">
                <CircleButton inside="1" />
                <CircleButton inside="2" />
                <CircleButton inside="3" />
                <CircleButton inside="4" />
                <CircleButton inside="5" />
            </div>
            <button className="submit">Submit</button>
        </main>
    );
}


export default App;