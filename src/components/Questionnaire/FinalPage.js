import React from 'react';
import tomatoesImage from '../../images/tomatoes.jpg'


const finalPage = (props) => {
    return <div>
            <p className="display-4 font-weight-bolder text-info">You answered correctly to all questions</p>
            <h2 className="font-weight-bolder text-info">Your score is {Math.round(props.score * 100)}%</h2>
            <img src={tomatoesImage} alt="tomatoes" />
        </div>
}

export default finalPage;