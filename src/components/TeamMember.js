import { Image } from 'antd'
import React from 'react'
import styled from 'styled-components'

const MemberImage = styled(Image).attrs({ preview: false })`
  &&& {
    width: 350px;
    height: 275px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 30px;
  }
`

const MemberText = styled.div`
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
    <div>
      <MemberImage src={src} alt={`Company ${role}`} />
      <MemberText>
        <h3>{name}</h3>
        <span>{role}</span>
      </MemberText>
    </div>
  )
}

export default TeamMember
