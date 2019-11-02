import React from 'react';

export default class Card extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="card">
                <h3>Card is here</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, vero!</p>
            </div>
        );
    }
}