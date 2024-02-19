import React from 'react'
import styled from 'styled-components'

export const ServicesItemContainer = styled.div`
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

const ServicesItem = ({ idx, children }) => (
  <ServicesItemContainer
    to="/products"
    style={{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(./img/services/bg_${idx}.jpg)`,
    }}
  >
    {children}
  </ServicesItemContainer>
)

export default ServicesItem
