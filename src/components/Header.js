import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons'
import { Image, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import scrollToSection from '../helpers/scrollTo'
import { HeaderStyled } from './Header.styled'

const HomeLink = () => <Link to="/">HOME</Link>
const AboutLink = () => (
  <Link onClick={() => scrollToSection('section-about')}>ABOUT US</Link>
)
const ServicesLink = () => (
  <Link onClick={() => scrollToSection('section-services')}>SERVICES</Link>
)
const OurClientsLink = () => (
  <Link onClick={() => scrollToSection('section-clients')}>OUR CLIENTS</Link>
)
const ReachOutLink = () => (
  <Link onClick={() => scrollToSection('section-contact')}>REACH OUT</Link>
)
const CloseLink = () => (
  <Link to="/">
    <CloseCircleOutlined />
  </Link>
)

const items = [
  { label: <HomeLink />, key: 'home' },
  { label: <AboutLink />, key: 'about' },
  { label: <ServicesLink />, key: 'services' },
  { label: <OurClientsLink />, key: 'clients' },
  { label: <ReachOutLink />, key: 'contact' },
  {
    label: <CloseLink />,
    key: 'close',
  },
]

const Header = () => (
  <HeaderStyled>
    <HomeLink />
    <AboutLink />
    <Image preview={false} width={150} src="/temp_logo.png" />
    <ServicesLink />
    <ReachOutLink />
    <Dropdown menu={{ items }} trigger={['click']}>
      <MenuOutlined />
    </Dropdown>
  </HeaderStyled>
)

export default Header
