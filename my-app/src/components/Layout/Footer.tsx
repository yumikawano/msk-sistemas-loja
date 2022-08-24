import styled from 'styled-components'

export function Footer() {
    return (
        <FooterStyled>
        <TextStyled>
          MKS sistemas © Todos os direitos reservados
        </TextStyled>
      </FooterStyled>
    )
}

const FooterStyled = styled.footer`
  display: flex;
  flex: 1;
  height: 34px;
  padding: 2rem 0;
  background:  #EEEEEE;
  justify-content: center;
  align-items: center;
`;
const TextStyled = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`