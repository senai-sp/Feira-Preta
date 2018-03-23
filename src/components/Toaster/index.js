import React, { Component } from 'react'
import { connect } from 'react-redux';

class Toaster extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>{this.props.message.text}</div>
        )
    }
}

const mapStateToProps = state => ({
    message: {
        text: state.message.message.text,
        isError: state.message.message.isError,
        warning: state.message.message.warning
    }
})

export default connect(mapStateToProps, null)(Toaster)