import React, { Component } from "react";

import faker from "faker";

import "./style.scss";

import Header from "./component/Header";
import Post from "./component/Post";

export default class App extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        const quantity = Math.floor(Math.random() * 10) + 1;
        let data = [];
        for (let index = 0; index < quantity; index++) {
            data.push({
                name: faker.name.findName(),
                avatar: faker.image.avatar(),
                content: faker.lorem.paragraph(),
                time: Math.floor(Math.random() * 59) + 1
            });
        }

        this.setState({ data });
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="wrapper-post">
                    {this.state.data.length > 0 &&
                        this.state.data.map((u, index) => (
                            <Post key={index} content={u} />
                        ))}
                </div>
            </div>
        );
    }
}
