import styled from 'styled-components'
import effect from '../../assets/effect.svg'

export const HeaderContainer = styled.header`
  position: absolute;
  height: 296px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* Base/Profile */

  background: ${(props) => props.theme['base-profile']};

  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  margin-top: 66.5px;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const GithubText = styled.span`
  /*   width: 148px;
  height: 38px; */

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;

  color: ${(props) => props.theme.blue};
`
