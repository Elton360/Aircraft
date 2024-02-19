import { Flex } from 'antd'
import styled from 'styled-components'

export const Section = styled.section`
  margin: 50px 0;
`
export const SectionTitle = styled.h2`
  font-size: 50px;
  margin-bottom: 40px;
  z-index: 2;

  @media (max-width: 580px) {
    font-size: 30px;
  }
`
export const SubTitle = styled.h3`
  font-size: 20px;
  margin: 40px 0;
`
export const SectionParagraph = styled.p`
  max-width: 900px;
  margin: 0 auto 100px auto;
  padding: 0 20px;
  font-size: 22px;
  text-align: center;
`
export const HeaderContent = styled(Section)`
  background-color: #000;
  color: #fff;
  position: relative;
  text-align: left;
  width: 100vw;
  height: calc(100vh - 78px);
  margin-top: 0;
`
export const PrimaryHeadingText = styled.span`
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
    top: 10px;
    position: absolute;
  }
  &:before {
    content: '\\201C';
    left: -60px;
  }
  &:after {
    content: '\\201D';
    left: 380px;
  }

  @media (max-width: 580px) {
    font-size: 60px;
    &:before {
      left: -30px;
    }
    &:after {
      left: 200px;
    }
  }
`
export const SecondaryHeadingText = styled.span`
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

  @media (max-width: 580px) {
    font-size: 50px;
  }
`
export const VideoContainer = styled.div`
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
export const InfoContainer = styled.div`
  position: relative;
  padding-top: 10vh;
  margin: 0 80px;
  h4 {
    font-size: 30px;
    text-transform: uppercase;
  }
  @media (max-width: 580px) {
    margin: 0 35px;
    padding-top: 15vh;
  }
`
export const TeamMembersContainer = styled(Flex)`
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const ContactContent = styled(Section)`
  background-color: rgba(2, 132, 208, 0.2);
  min-height: 1000px;
  margin-bottom: 0;
`
export const ContactContentContainer = styled(Flex)`
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ContactContentLeft = styled.div`
  position: relative;
  background-image: linear-gradient(
      rgba(2, 132, 208, 0.5),
      rgba(2, 132, 208, 0.5)
    ),
    url(./contact_bg.jpg);
  background-size: cover;
  background-position: center center;
  width: 50%;
  height: 1000px;

  @media (max-width: 1200px) {
    width: 100%;
    max-height: 75vh;
  }
`
export const ContactContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 70px;
  margin-top: 70px;

  @media (max-width: 1200px) {
    margin-left: 0;
    width: 100%;
  }
`
export const ContactCardsRow = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
`

export const ClientsContent = styled(Section)`
  min-height: 800px;
  margin-bottom: 80px;
`
export const ServiceContent = styled(Section)`
  margin-top: 80px;
  img {
    height: 90% !important;
  }
`
export const ContactCard = styled.div`
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

  @media (max-width: 1200px) {
    margin: 15px;
  }
`
export const ClientCardsContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1400px) {
  }
`
