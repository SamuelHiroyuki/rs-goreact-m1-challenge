import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

import PostHeader from "../PostHeader";

const content = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired
};

export default class App extends Component {
    static propTypes = {
        content: PropTypes.shape(content).isRequired
    };

    static defaultProps = {
        content: {
            name: "Samuel Hiroyuki",
            avatar:
                "https://avatars0.githubusercontent.com/u/36797629??v=4&s=115",
            content: "No content",
            time: 0
        }
    };

    render() {
        return (
            <div className="post-container">
                <PostHeader
                    avatar={this.props.content.avatar}
                    name={this.props.content.name}
                    time={this.props.content.time}
                />
                <p>{this.props.content.content}</p>
            </div>
        );
    }
}
