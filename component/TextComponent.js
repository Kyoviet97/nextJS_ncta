import React, { Component } from 'react'

export default class TextComponent extends Component {
    render() {
        return (
            <div>
                <text>{this.props.content}</text>
            </div>
        )
    }
}
