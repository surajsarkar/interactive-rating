import React, { useState } from 'react';
import './App.css';
import CircleButton from './components/main';
import thankyou from './interactive-rating-component-main/images/illustration-thank-you.svg';


function App() {
    const [submit, setSubmit] = useState(false);
    const [rating, setRating] = useState(0);
    return (
        <main className={'main'} style={{alignItems: submit ? "center" : "left"}}>
            {
                submit ? <img style={{width: 200, marginBottom: 20}} src={thankyou} /> : <CircleButton inside="⭐" />
            }
            {
                submit && <div className="rating">You selected {rating} out of 5</div>
            }

            {
                submit ? <p className="question">Thank you</p> : <p className="question">How did we do?</p>
            }
            
            {
                submit ? <p className="desc">We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch!</p> : <p className="desc">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            }
            {
                submit || <div className="button-row">
                    <CircleButton inside="1" value="1" setRating={setRating}/>
                    <CircleButton inside="2" value="2" setRating={setRating}/>
                    <CircleButton inside="3" value="3" setRating={setRating}/>
                    <CircleButton inside="4" value="4" setRating={setRating}/>
                    <CircleButton inside="5" value="5" setRating={setRating}/>
                </div>
            }
            {
                submit || <button className="submit" onClick={() => setSubmit(true)}>SUBMIT</button> 
                
            }

            
        </main>
    );
}


export default App;