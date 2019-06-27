import React from 'react';
import classes from './Toolbar.module.css'
import tomatoImage from '../../images/tomato.jpg'

const toolbar = (props) => {
    return <div className={classes.Toolbar}>
            <p className="display-2 font-weight-bolder font-italic">Break & Learn</p>
            <img src={tomatoImage} alt="pomodoro"/>
        </div>
}

export default toolbar;