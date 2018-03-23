import React, { Component } from 'react'
import { connect } from 'react-redux';
import classnames from 'classnames'
import './toaster.css'

class Toaster extends Component {

    render() {

        return (
            <div className={classnames({ 'error-alert': (this.props.message.type == 'failure'), 'success-alert': (this.props.message.type == 'success'), 'warning-alert': (this.props.message.type == 'warning') })}>{this.props.message.text}</div>
        )
    }
}

const mapStateToProps = state => ({
    message: {
        text: state.message.message.text,
        type: state.message.message.type
    }
})

export default connect(mapStateToProps, null)(Toaster)