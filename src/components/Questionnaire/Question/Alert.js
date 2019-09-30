import React from 'react';

const alert = (props) => {
return(<div class={'alert ' + props.alertType} role="alert">
    {props.children}
</div>)
}

export default alert;