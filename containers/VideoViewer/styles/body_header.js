import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  background-color: ${theme('preview.articleBg')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 35px;
  padding-bottom: 5px;
`
export const MoreWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
export const MoreIcon = styled(Img)`
  fill: #6a868a;
  width: 15px;
  height: 15px;
`
export const LablerWrapper = styled.div``

export const RefinedLabel = styled.div`
  display: flex;
  align-items: center;
  color: tomato;
  border: 1px dashed tomato;
  padding: 0 5px;
  border-radius: 5px;
  margin-top: -2px;
`
export const RefinedIcon = styled(Img)`
  fill: tomato;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: -2px;
  display: block;
`
export const RefinedText = styled.div``
