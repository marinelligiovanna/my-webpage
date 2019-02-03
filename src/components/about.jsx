import React from "react"
import {Avatar, Section} from "../presenters";

export default class About extends React.Component {

    render() {
        return <React.Fragment>
            < Section >
                <Section.Content>
                    <Avatar
                        alt="Giovanna Marinelli"
                        src="img/avatar2_pic.jpg"
                        style={{
                        marginLeft: '2em',
                        marginRight: '2em'
                    }}/>
                    bla bla bla bla bla
                </Section.Content>
            </Section>
            <Section type="secondary">Teste teste teste</Section >
            <Section >Teste teste teste</Section >
        </React.Fragment>
    }
}