import React from 'react'
import PropTypes from 'prop-types'

export default class Page extends React.Component {
  render() {
    const { todoData, term, filter } = this.props
    return (
      <div>
        
      </div>
    )
  }
}

Page.propTypes = {
  todoData: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
}
