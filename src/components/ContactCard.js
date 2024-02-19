import { Flex } from 'antd'
import styled from 'styled-components'

export const ContactCardsRow = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
`

const ContactCardStyled = styled.div`
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

const ContactCard = ({ icon, title, children }) => (
  <ContactCardStyled>
    {icon}
    <b>{title}</b>
    <span>{children}</span>
  </ContactCardStyled>
)

export default ContactCard
