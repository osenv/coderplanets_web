/*
 *
 * PostItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

import DigestView from './DigestView'
import ListView from './ListView'

import { renderReadMark, getOpacity } from './helper'
import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:PostItem:index')
/* eslint-enable no-unused-vars */

const PostItem = ({ entry, active, onTitleSelect, accountInfo }) => {
  // debug('customization --> ', customization)
  const {
    customization: { contentsLayout },
  } = accountInfo

  return (
    <Wrapper opacity={getOpacity(entry, active, accountInfo)}>
      {renderReadMark(entry, accountInfo)}
      {contentsLayout === 'DIGEST' ? (
        <DigestView entry={entry} onTitleSelect={onTitleSelect} />
      ) : (
        <ListView entry={entry} onTitleSelect={onTitleSelect} />
      )}
    </Wrapper>
  )
}

PostItem.propTypes = {
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    digest: PropTypes.string,
    views: PropTypes.number,

    author: PropTypes.shape({
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,

  accountInfo: PropTypes.shape({
    isLogin: PropTypes.bool,
    customization: PropTypes.shape({
      contentsLayout: PropTypes.oneOf(['DIGEST', 'LIST']),
      markViewed: PropTypes.bool,
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  onTitleSelect: PropTypes.func,
}

PostItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: 'DIGEST',
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default PostItem
