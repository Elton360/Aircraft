import { useState } from 'react'
import { Button, Input, Layout, Space } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { Divider } from 'antd'

const { Footer: FooterLayout } = Layout

const FooterStyled = styled(FooterLayout)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
`

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const FooterBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-width: 25%;
  text-align: justify;
  a,
  span {
    margin-bottom: 15px;
  }
  a {
    font-weight: bold;
    margin-bottom: 15px;
    color: #334257;

    &: hover {
      color: #548ca8;
    }
  }
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const IconLinkWrapper = styled(Link)`
  display: flex;
  width: 100%;

  .anticon {
    margin: 10px auto;
    transform: scale(3);
  }
`

const Footer = () => (
  <>
    {' '}
    <Divider />
    <FooterStyled>
      <FooterBottom>
        <FooterBottomItem>
          <h3>Services</h3>
          <Link to="/">Post #1</Link>
          <Link to="/">Post #2</Link>
          <Link to="/">Post #3</Link>
          <Link to="/">Post #4</Link>
        </FooterBottomItem>
        <FooterBottomItem>
          <h3>Our company</h3>
          <Link to="/">Our Company</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Business Benefits</Link>
          <Link to="/">Partner with Us</Link>
        </FooterBottomItem>
        <FooterBottomItem>
          <h3>Connect with us</h3>
          <IconLinkWrapper to="/">
            <FacebookOutlined />
          </IconLinkWrapper>
          <IconLinkWrapper to="/">
            <LinkedinOutlined />
          </IconLinkWrapper>
          <IconLinkWrapper to="/">
            <InstagramOutlined />
          </IconLinkWrapper>
        </FooterBottomItem>
        <FooterBottomItem>
          <h3>Office Hours</h3>
          <a href="tel: +(877) 999-9999+">(877) 999-9999</a>
          <span>
            <b>M-F:</b> 7 AM to 5 PM PST
          </span>
          <span>
            <b>email:</b> someemail@clean.com
          </span>
        </FooterBottomItem>
      </FooterBottom>
    </FooterStyled>
  </>
)

export default Footer
