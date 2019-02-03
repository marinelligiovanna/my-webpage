import React from 'react';
import App from "../utils/app";
import {Menu} from "../presenters/"

export default class Page extends React.Component {

    state = {
        current: "about_me"
    }

    MENU_ITEMS = [
        {
            name: "about_me",
            text: "About me",
            icon: "grin",
            onClick: e => this.onMenuItemClick(e, "about_me")
        }, {
            name: "career",
            text: "Career",
            icon: "briefcase",
            onClick: e => this.onMenuItemClick(e, "career")
        }, {
            name: "projects",
            text: "Projects",
            icon: "embed2",
            onClick: e => this.onMenuItemClick(e, "projects")
        }
    ]

    render() {
        const {children} = this.props;
        return (
            <React.Fragment>
                {App.isMobile()
                    ? this.renderMobileMenu()
                    : this.renderLargeScreenMenu()}
                {children}
            </React.Fragment>
        )
    }

    renderMobileMenu = () => {
        return <Menu fixed attached="bottom" position="centered">{this.getMenuItems()}</Menu>
    }

    renderLargeScreenMenu = () => {
        return (
            <Menu sticky position="right" borderOnScroll={true}>
                {this.getMenuItems()}
            </Menu>
        );
    }

    getMenuItems = () => {
        const {current} = this.state;

        return (this.MENU_ITEMS.map((item, key) => (<Menu.Item
            key={key}
            name={item.name}
            icon={App.isMobile() ? item.icon : null}
            text={item.text}
            active={current === item.name}
            onClick={item.onClick}/>)));
    }

    onMenuItemClick = (e, name) => {
        this.setState({current: name});
    }
}