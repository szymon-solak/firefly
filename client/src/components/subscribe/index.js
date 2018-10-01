import React, { Component } from 'react'

export default class Subscribe extends Component {
  componentWillMount() {
    const { type, subscribe } = this.props

    this.unsubscribe = subscribe(type, (action) => {
      this.setState({ data: action.payload })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return React.cloneElement(
      this.props.children,
      Object.assign({}, this.props, this.state),
    )
  }
}
