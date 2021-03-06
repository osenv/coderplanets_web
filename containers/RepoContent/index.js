/*
 *
 * RepoContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Affix } from 'antd'

import { makeDebugger, storePlug } from 'utils'

import Maybe from 'components/Maybe'
import MarkDownRender from 'components/MarkDownRender'

import Comments from '../Comments'
import SideCards from './SideCards'

import { Wrapper, MainWrapper, ArticleWrapper, CommentsWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:RepoContent')

class RepoContentContainer extends React.Component {
  componentDidMount() {
    const { repoContent } = this.props
    logic.init(repoContent)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { repoContent } = this.props
    const { viewingData } = repoContent

    return (
      <Wrapper>
        <Maybe test={viewingData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <MarkDownRender body={viewingData.readme} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <Affix offsetTop={30}>
              <SideCards data={viewingData} />
            </Affix>
          </React.Fragment>
        </Maybe>
      </Wrapper>
    )
  }
}

export default inject(storePlug('repoContent'))(observer(RepoContentContainer))
