import React from 'react';
import Icon from "../icon"
import "./index.css"
import {ClassNameBuilder} from "../../utils"

export default class Item extends React.PureComponent {

    render() {
        const {name, href, text, onClick, icon} = this.props;

        return (
            <div role="menuitem" className={this.getClassName()} onClick={onClick}>
                {icon && <Icon icon={icon} style={this.getIconStyle()}/>}
                <a key={name} href={href} onClick={onClick}>
                    {text}
                </a>
            </div>
        )
    }

    getClassName = () => {
        const {
            active
        } = this.props;

        const builder = new ClassNameBuilder();
        builder
            .add("item")
            .add("active", active)

        return builder.getClassName();
    }

    getIconStyle = () => {
        const {
            iconColor = "rgb(24,144,255)",
            iconWidth = "2.5em",
            iconHeight = "1.8em",
            iconPaddingBottom = "3px",
            iconPaddingRight="5px"
        } = this.props;

        return {fill: iconColor, width: iconWidth, height: iconHeight, paddingRight: iconPaddingRight, paddingBottom: iconPaddingBottom};
    };
}
