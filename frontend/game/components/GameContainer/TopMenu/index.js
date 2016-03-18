import React from 'react';

export default class TopMenu extends React.Component{
    render() {
        return(
            <div className="top_menu">
                <span className="menu-left">&#x2630;</span>
                <span className="menu-middle">{this.props.theme === '' ? 'Все подряд' :
                        this.props.theme.charAt(0).toUpperCase() + this.props.theme.substr(1)}</span>
                <span className="menu-right">&#x2709;</span>
            </div>
        )
    }
};