import { Carousel, Flex } from 'antd'
import React from 'react'
import TeamMember from '../components/TeamMember'
import {
  MailOutlined,
  AimOutlined,
  PhoneOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'
import {
  HeaderContent,
  VideoContainer,
  InfoContainer,
  SecondaryHeadingText,
  PrimaryHeadingText,
  SubTitle,
  Section,
  SectionTitle,
  SectionParagraph,
  TeamMembersContainer,
  ContactContent,
  ContactContentContainer,
  ContactContentLeft,
  ContactContentRight,
  ServiceContent,
  ClientsContent,
  ClientCardsContainer,
} from './LandingPage.styled'
import ClientItem from '../components/ClientItem'
import ServicesItem from '../components/ServicesItem'
import ContactCard, { ContactCardsRow } from '../components/ContactCard'

const LandingPage = () => {
  const clients = ['Client 1', 'Client 2', 'Client 3', 'Client 4']
  const carouselContent = ['Service 1', 'Service 2', 'Service 3']
  const teamMembers = [
    { name: 'Roberta Kim', role: 'President' },
    { name: 'Alice Lee', role: 'Vice President' },
    { name: 'Steve Smith', role: 'Head of Marketing' },
  ]
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

      <Section id="section-about">
        <SectionTitle>Who we are</SectionTitle>
        <SectionParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </SectionParagraph>
        <SubTitle>Our Professional Team</SubTitle>
        <Flex justify="center">
          <TeamMembersContainer>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} index={index} {...member} />
            ))}
          </TeamMembersContainer>
        </Flex>
      </Section>

      <ContactContent id="section-contact">
        <ContactContentContainer justify="space-between">
          <ContactContentLeft />
          <ContactContentRight>
            <SectionTitle class="heading-3 mb-sm">Contact us</SectionTitle>
            <h2>“Some catchy quote that sounds like heaven”</h2>
            <Flex vertical align="center">
              <ContactCardsRow>
                <ContactCard icon={<MailOutlined />} title={'Mail'}>
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
                <ContactCard icon={<PhoneOutlined />} title="Phone">
                  <a href="tel:786-400-0000" target="_blank" rel="noreferrer">
                    (786) 400-0000
                  </a>
                </ContactCard>
              </ContactCardsRow>
              <ContactCardsRow>
                <ContactCard icon={<AimOutlined />} title="Location">
                  Miami, Florida
                </ContactCard>
                <ContactCard icon={<LinkedinOutlined />} title="Follow us">
                  <a href="linkedin.com" target="_blank" rel="noreferrer">
                    Limpio
                  </a>
                </ContactCard>
              </ContactCardsRow>
            </Flex>
          </ContactContentRight>
        </ContactContentContainer>
      </ContactContent>

      <ServiceContent id="section-services">
        <SectionTitle>Our Services</SectionTitle>
        <Carousel autoplay autoplaySpeed={5000}>
          {carouselContent.map((title, idx) => (
            <React.Fragment key={title}>
              <ServicesItem idx={idx + 1}>
                <SectionTitle>{title}</SectionTitle>
              </ServicesItem>
            </React.Fragment>
          ))}
        </Carousel>
      </ServiceContent>

      <ClientsContent id="section-clients">
        <SectionTitle>Our Clients</SectionTitle>
        <ClientCardsContainer justify="center">
          {clients.map((client, idx) => (
            <ClientItem key={idx} name={client} idx={idx + 1} />
          ))}
        </ClientCardsContainer>
      </ClientsContent>
    </main>
  )
}

export default LandingPage
