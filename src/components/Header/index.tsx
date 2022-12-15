import logo from '../../assets/logo.svg'
import { GithubText, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo}></img>
        <GithubText>GITHUB BLOG</GithubText>
      </HeaderContent>
    </HeaderContainer>
  )
}
