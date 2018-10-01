import React, { Component } from 'react'

const TIME_LIMIT = 10

export default class StatusBar extends Component {
  constructor() {
    super()
    this.state = {
      lastHeartbeat: null,
      latency: 0
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          latency: this.state.latency + 1
        })
      },
      1000
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lastHeartbeat: nextProps.time,
      latency: 0
    })
  }

  render() {
    if (
      this.state.latency !== undefined
      && this.state.lastHeartbeat !== null
      && this.state.latency < TIME_LIMIT
    ) return null

    return (
      <section id="statusBar">
        <h1>No connection</h1>
      </section>
    )
  }
}
