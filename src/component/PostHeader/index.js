import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default class App extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired
    };

    // static defaultProps = {
    // };

    render() {
        return (
            <div className="post-header">
                <img src={this.props.avatar} alt="Avatar" />
                <div className="post-info">
                    <strong>{this.props.name}</strong>
                    <span>
                        há {this.props.time}{" "}
                        {this.props.time > 1 ? "minutos" : "minuto"}
                    </span>
                </div>
            </div>
        );
    }
}
