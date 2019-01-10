/*
*
* BodyLayout
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

// import Link from 'next/link'

import { storePlug } from '../../utils'

import Wrapper from './styles'
import * as logic from './logic'

class BodyLayoutContainer extends React.Component {
  constructor(props) {
    super(props)

    const { bodylayout } = props
    logic.init(bodylayout)
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { bodylayout: { sidebarPin }, children, noSidebar } = this.props

    return (
      <Wrapper sidebarPin={sidebarPin} noSidebar={noSidebar}>
        {children}
      </Wrapper>
    )
  }
}

BodyLayoutContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  bodylayout: PropTypes.object.isRequired,
  noSidebar: PropTypes.bool,
}

BodyLayoutContainer.defaultProps = {
  children: <div />,
  noSidebar: false,
}

export default inject(storePlug('bodylayout'))(observer(BodyLayoutContainer))
