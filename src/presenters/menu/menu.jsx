import React from "react";
import "./index.css"
import {ClassNameBuilder} from "../../utils";

export default class Menu extends React.PureComponent {

    state = {
        scrollY: 0
    }

    constructor(props) {
        super(props);
        this.classNameBuilder = new ClassNameBuilder();
    }

    componentDidMount() {
        const {
            borderOnScroll = false
        } = this.props;

        if (borderOnScroll) {
            window.addEventListener("scroll", this.windowScrollListener);
        }
    }

    componentWillUnmount() {
        const {
            borderOnScroll = false
        } = this.props;

        if (borderOnScroll) {
            window.removeEventListener("scroll", this.windowScrollListener)
        }
    }

    componentWillUpdate() {
        this
            .classNameBuilder
            .clean();
    }

    render() {
        const {children} = this.props;

        return <div role="menu" className={this.getClassName()}>
            {children}
        </div>
    }

    getClassName = () => {
        const {
            vertical = false,
            attached = "top",
            sticky = false,
            fixed = false,
            position = "left",
            borderOnScroll = false
        } = this.props;

        const {scrollY} = this.state;

        this
            .classNameBuilder
            .add("bordered", !borderOnScroll || scrollY !== 0)
            .add(position)
            .add(attached + " attached", attached)
            .add("fixed", fixed)
            .add("sticky", sticky)
            .add("flex vertical", vertical)
            .add("menu");

        return this
            .classNameBuilder
            .getClassName();
    }

    windowScrollListener = () => {
        if (this.windowScrollInterval) {
            clearInterval(this.windowScrollInterval);
        }

        this.windowScrollInterval = setTimeout(this.handleWindowScroll, 16);
    }

    handleWindowScroll = () => {
        this.setState({scrollY: window.scrollY});
    }

}