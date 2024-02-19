import React from 'react'
import styled from 'styled-components'

export const ClientCard = styled.div`
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
const Client = ({ name, idx }) => (
  <ClientCard
    style={{
      backgroundImage: `url(./img/clients/${idx}.jpg)`,
    }}
  >
    <span>{name}</span>
  </ClientCard>
)
export default Client
