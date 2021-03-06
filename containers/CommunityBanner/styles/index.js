import styled from 'styled-components'

import { theme, cs } from 'utils'

export const BaseBanner = styled.nav`
  ${cs.flexColumn('justify-center')};
  align-items: center;

  position: relative;
  min-height: 140px;
  background: ${theme('banner.bg')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    // min-height: 130px;
  }
`
export const BaseTabber = styled.div`
  ${cs.flex()};

  position: absolute;
  bottom: -16px;
  margin-left: -10px;
  width: 80vw;
`
