import { Layout, Image } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Header: HeaderLayout } = Layout

const HeaderStyled = styled(HeaderLayout)`
  background-color: #334257;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 78px;
  a {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    line-height: 0;
    transition: all 0.2s;
  }

  a:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 1);
    transform: scale(1.05);
    &::after {
      margin-top: 8px;
      display: block;
      content: ' ';
      width: 100%;
      height: 1.5px;
      background: white;
    }
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">home</Link>
      <Link to="/">Services</Link>
      <Image preview={false} width={150} src="/temp_logo.png" />
      <Link to="/">our clients</Link>
      <Link to="/">reach out</Link>
    </HeaderStyled>
  )
}

export default Header
