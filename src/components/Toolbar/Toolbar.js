import React from 'react';
import classes from './Toolbar.module.css'
import tomatoImage from '../../images/tomato.png'

const toolbar = (props) => {
    return <div className={classes.Toolbar}>
        <div className="w-25"></div>
        <div className="w-50">
            <p className="display-2 font-weight-bolder font-italic">My pomodoro</p>
        </div>
        <div className="w-25">
            <img className={classes.Image} src={tomatoImage} alt="pomodoro" />
        </div>
    </div>
}

export default toolbar;