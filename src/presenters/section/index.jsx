import React from "react";
import "./index.css"
import {ClassNameBuilder} from "../../utils"

import Content from "./content";

const Section = ({
    type = "primary",
    children
}) => {

    const getSectionClassName = () => {
        const builder = new ClassNameBuilder();

        builder
            .add(type)
            .add("section");

        return builder.getClassName();
    }

    const getInnerClassName = () => {
        const builder = new ClassNameBuilder();

        builder
            .add(type)
            .add("section")
            .add("inner");

        return builder.getClassName();
    }

    return <section className={getSectionClassName()}>
        <div role="section-inner" className={getInnerClassName()}>{children}</div>
    </section>
}

Section.Content = Content;

export default Section;