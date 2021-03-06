import styled from 'styled-components'

import { theme, cs } from 'utils'

export const BodyWrapper = styled.div`
  ${cs.flexColumn()};

  padding: 20px;
  background: ${theme('preview.articleBg')};
  min-height: 600px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`
export const CommentsWrapper = styled.div`
  min-height: 400px;
  margin-top: 32px;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 10%;
  border-radius: 5px;
`

export const ArticleTitle = styled.div`
  color: ${theme('preview.title')};
  font-size: 1.2rem;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;

  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.divider')};
`
export const ArticleBody = styled.article`
  padding: 20px;
  font-size: 1.2em;
  line-height: 2em;
  flex-grow: 1;
`
export const Footer = styled.div`
  ${cs.flex('align-both')};
`
