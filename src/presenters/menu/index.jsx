import React from "react";
import Item from "./item";
import Menu from "./menu";
import "./index.css"

export default class extends React.PureComponent {

    static Item = Item;
    static Menu = Menu;

    state = {
        scrollY: 0
    }

    render() {
        const {
            children,
            ...rest
        } = this.props;

        return (
            <Menu {...rest}>{children}</Menu>
        )
    }

}