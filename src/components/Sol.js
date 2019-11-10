import React from 'react';

export default class Sol extends React.Component {

    render() {
        
        const style = {...{
            background: 'yellow',
            borderRadius: '10vw',
            width: '10vw',
            height: '10vw'
        }, ...this.props.style};

        return (
            <div style={style}></div>
        )
    }
}