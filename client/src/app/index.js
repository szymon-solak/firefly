import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Rx from 'rxjs'

const subscribe = obs => (type, fn) => obs
  .ofType(type)
  .subscribe(fn)

const parseMessage = message => JSON.parse(message.data)

const log = (message) => {
  if (message.type !== 'HEARTBEAT') console.log(JSON.stringify(message, null, 2))
  return message
}

class Dashboard extends Component {
  componentWillMount() {
    const socket = new WebSocket('ws://localhost:8090')
    this.Observable = Rx
      .Observable
      .fromEvent(socket, 'message')
      .map(parseMessage)
      //.map(log)

    this.Observable.ofType = function(type) {
      return this.filter(props => props.type === type)
    }
  }

  render() {
    const { children, rows, columns } = this.props
    const style = {
      gridTemplate: `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`,
    }

    const subscribeWithObservable = subscribe(this.Observable)

    const childrenWithProps = React.Children.map(
      children,
      child => React.cloneElement(child, { subscribe: subscribeWithObservable }),
    )

    return (
      <section className="dashboard" style={style}>
        {childrenWithProps}
      </section>
    )
  }
}

Dashboard.propTypes = {
  rows: PropTypes.string.isRequired,
  columns: PropTypes.string.isRequired,
}

export default Dashboard
