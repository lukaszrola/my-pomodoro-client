import React from 'react';

const domainChooser = (props) => {
    const domains = props.categories;
    const domainsToDisplay = domains.map(a =>
        <button className="btn btn-info btn-lg m-4" onClick={() => props.onChoice(a)}>{a}</button>);
    const skipButton = <button className="btn btn-warning btn-lg m-4" onClick={() => props.onSkip()}>Skip learning</button>;
    domainsToDisplay.push(skipButton);

    return <div>
        <p className="display-2 font-weight-bolder">Choose domain</p>
        <div className="btn-group-vertical">{domainsToDisplay}</div>;

    </div>
}

export default domainChooser;