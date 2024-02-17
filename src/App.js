import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Flex, Layout } from 'antd'
import LandingPage from './pages/LandingPage'
import styled from 'styled-components'

import './App.css'

const { Content } = Layout

const ContentStyled = styled(Content)`
  text-align: center;
  min-height: calc(100vh);
  color: #fff;
  max-width: calc(100vw);
  margin: 'auto';
  color: #333;
`
const LayoutStyled = styled(Layout)`
  overflow: hidden;
  width: 100%;
  max-width: 100%;
`

function App() {
  return (
    <Router>
      <Flex gap="middle" wrap="wrap">
        <LayoutStyled>
          <Header />
          <ContentStyled>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </ContentStyled>
          <Footer />
        </LayoutStyled>
      </Flex>
    </Router>
  )
}

export default App
