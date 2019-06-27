import React from 'react';
import tomatoesImage from '../../images/tomatoes.jpg'


const finalPage = (props) => {
    return <div>
            <p className="display-4 font-weight-bolder text-info">You answered correctly to all questions</p>
            <img src={tomatoesImage} alt="tomatoes" />

        </div>
}

export default finalPage;