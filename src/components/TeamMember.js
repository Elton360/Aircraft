import { Image as AntDImage } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  @media (max-width: 1200px) {
    margin-bottom: 100px;
  }
`

const Image = styled(AntDImage).attrs({ preview: false })`
  &&& {
    width: 350px;
    height: 275px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 30px;
  }
`

const Text = styled.div`
  margin-top: 30px;
  h3 {
    font-size: 25px;
  }
  span {
    font-size: 17px;
  }
`

const TeamMember = ({ index, name, role }) => {
  const src = `/img/team/${index + 1}.jpg`

  return (
    <Container>
      <Image src={src} alt={`Company ${role}`} />
      <Text>
        <h3>{name}</h3>
        <span>{role}</span>
      </Text>
    </Container>
  )
}

export default TeamMember
