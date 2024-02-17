import { Carousel, Flex, Image } from 'antd'
import React from 'react'
import styled from 'styled-components'
import TeamMember from '../components/TeamMember'
import {
  MailOutlined,
  AimOutlined,
  PhoneOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'

const SecondaryHeadingText = styled.span`
  display: block;
  font-size: 80px;
  font-weight: 400;
  position: relative;
  -webkit-animation-name: moveInLeft;
  animation-name: moveInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
`
const PrimaryHeadingText = styled.span`
  display: block;
  font-size: 110px;
  font-weight: 600;
  position: relative;
  animation-name: moveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-out;

  &:before,
  &:after {
    display: block;
    line-height: 1;

    position: absolute;
  }
  &:before {
    content: '\\201C';
    left: -60px;
    top: 10px;
  }
  &:after {
    content: '\\201D';
    left: 380px;
    top: 10px;
  }
`

const Section = styled.section`
  margin: 50px 0;
`

const HeaderContent = styled(Section)`
  background-color: #000;
  color: #fff;
  position: relative;
  text-align: left;
  width: 100vw;
  height: calc(100vh - 78px);
  margin-top: 0;
`

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.6;
  overflow: hidden;

  & video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const InfoContainer = styled.div`
  position: relative;
  padding-top: 10vh;
  margin: 0 160px;
  h4 {
    font-size: 30px;
    text-transform: uppercase;
  }
`
const MainBGContent = styled.div`
  height: 900px;
  color: #fff;
  text-align: center;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2.1px;
`

const SectionTitle = styled.h2`
  font-size: 50px;
  margin-bottom: 40px;
  z-index: 2;
`
const SubTitle = styled.h3`
  font-size: 20px;
  margin: 40px 0;
`
const SectionParagraph = styled.p`
  max-width: 900px;
  margin: 0 auto 100px auto;
  font-size: 22px;
  text-align: center;
`

const ContactContent = styled(Section)`
  background-color: rgba(2, 132, 208, 0.2);
  height: 1000px;
  margin-bottom: 0;
`
const ClientsContent = styled(Section)`
  height: 800px;
  margin-bottom: 80px;
`
const ServiceContent = styled(Section)`
  margin-top: 160px;
  img {
    height: 90% !important;
  }
`
const ContactContentLeft = styled.div`
  position: relative;
  background-color: #c69963;
  background-image: linear-gradient(
      rgba(2, 132, 208, 0.5),
      rgba(2, 132, 208, 0.5)
    ),
    url(./bg-2.jpg);
  background-size: cover;
  background-position: center center;
  width: 50%;
  height: 1000px;
`
const ContactContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 70px;
  margin-top: 70px;
`
const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 220px;
  height: 220px;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 30px;
  padding: 40px 0 40px 0;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.03);
  }
  .anticon {
    transform: scale(2);
  }

  font-size: 20px;

  a {
    color: #333;

    &:hover {
      text-decoration: underline;
    }
  }
`
const ClientCard = styled.div`
  margin: 32px;
  width: 420px;
  height: 520px;
  padding: 430px 20px 0 20px;
  background-position: center center;
  background-size: cover;

  span {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    background-color: #0284d0;
    padding: 15px 0;
    display: block;
  }
`

const carouselContent = ['Service 1', 'Service 2', 'Service 3']
const teamMembers = [
  { name: 'Robert Kim', role: 'President' },
  { name: 'Alice Lee', role: 'Vice President' },
  { name: 'Steve Smith', role: 'Head of Marketing' },
]
const clients = ['Client 1', 'Client 2', 'Client 3', 'Client 4']
const MainBG = ({ idx, children }) => (
  <MainBGContent
    to="/products"
    style={{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(./img/services/bg_${idx}.jpg)`,
    }}
  >
    {children}
  </MainBGContent>
)

const Client = ({ name, idx }) => (
  <ClientCard
    style={{
      backgroundImage: `url(./img/clients/${idx}.jpg)`,
    }}
  >
    <span>{name}</span>
  </ClientCard>
)
const LandingPage = () => {
  return (
    <main>
      <HeaderContent>
        <VideoContainer>
          <video autoPlay loop muted>
            <source src="/temp_bg_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoContainer>
        <InfoContainer>
          <Flex vertical>
            <h1>
              <SecondaryHeadingText>We are</SecondaryHeadingText>
              <PrimaryHeadingText>Limpio</PrimaryHeadingText>
            </h1>
            <h4>Satisfaction Guaranteed</h4>
            <SubTitle>
              We will thoroughly suck every last grain of dust.
              <br />
              Contact us today to have your mind blown.
            </SubTitle>
          </Flex>
        </InfoContainer>
      </HeaderContent>

      <Section>
        <SectionTitle>Who we are</SectionTitle>
        <SectionParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </SectionParagraph>
        <SubTitle>Our Professional Team</SubTitle>
        <Flex justify="center">
          <Flex>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} index={index} {...member} />
            ))}
          </Flex>
        </Flex>
      </Section>

      <br />
      <br />
      <ContactContent>
        <Flex justify="space-between">
          <ContactContentLeft />
          <ContactContentRight>
            <SectionTitle class="heading-3 mb-sm">Contact us</SectionTitle>
            <h2>“Some catchy quote that sounds like heaven”</h2>
            <Flex vertical align="center">
              <Flex>
                <ContactCard>
                  <MailOutlined />
                  <b>Mail</b>
                  <span>
                    <a
                      href="mailto:email@limpio.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      email@limpio.com
                    </a>
                  </span>
                </ContactCard>
                <ContactCard>
                  <PhoneOutlined />
                  <b>Phone</b>
                  <a href="tel:786-400-0000" target="_blank" rel="noreferrer">
                    (786) 400-0000
                  </a>
                </ContactCard>
              </Flex>
              <Flex>
                <ContactCard>
                  <AimOutlined />
                  <b>Location</b>
                  <span>Miami, Florida</span>
                </ContactCard>
                <ContactCard>
                  <LinkedinOutlined />
                  <b>Follow us</b>
                  <span>
                    <a href="linkedin.com" target="_blank" rel="noreferrer">
                      Limpio
                    </a>
                  </span>
                </ContactCard>
              </Flex>
            </Flex>
          </ContactContentRight>
        </Flex>
      </ContactContent>
      <ServiceContent>
        <SectionTitle>Our Services</SectionTitle>
        <Carousel autoplay autoplaySpeed={5000}>
          {carouselContent.map((title, idx) => (
            <React.Fragment key={title}>
              <MainBG idx={idx + 1}>
                <SectionTitle>{title}</SectionTitle>
              </MainBG>
            </React.Fragment>
          ))}
        </Carousel>
      </ServiceContent>
      <ClientsContent>
        <SectionTitle>Our Clients</SectionTitle>
        <Flex justify="center">
          {clients.map((client, idx) => (
            <Client key={idx} name={client} idx={idx + 1} />
          ))}
        </Flex>
      </ClientsContent>
    </main>
  )
}

export default LandingPage
