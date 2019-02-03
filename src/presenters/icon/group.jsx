import React from 'react';

/**
 * The Icon.Group presenter is a wrapper for icons displayed inline.
 * 
 * @author Giovanna Marinelli
 */
export default class extends React.PureComponent{
    render(){
        return <div className="icon-group">{this.props.children}</div>
    }
}