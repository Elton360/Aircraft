import styled from 'styled-components'
import { Layout } from 'antd'

export const HeaderStyled = styled(Layout.Header)`
  position: relative;
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
    box-shadow: 0 16px 32px rgba(0, 0, 0, 1);
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

  .ant-dropdown-trigger {
    color: #fff;
    display: none;
    position: absolute;
    top: 30px;
    right: 28px;
    transform: scale(3);
  }

  @media (max-width: 680px) {
    a {
      display: none;
    }
    .ant-dropdown-trigger {
      display: block;
    }
  }
`
