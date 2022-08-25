import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components"

export function Header() {
    return (
        <HeaderStyled>
            <ContainerStyled>
                <TitleStyled>MKS</TitleStyled>
                <TextStyled>Sistemas</TextStyled>
                <ButtonStyled as={Link} to="/cart"><FontAwesomeIcon icon={faCartArrowDown} />
                <SpanStyled className="btn-cart-badge"></SpanStyled>
                </ButtonStyled>
            </ContainerStyled>
        </HeaderStyled>
    )
}
const HeaderStyled = styled.header`
  display: flex;
  background: #0F52BA;
  width: 100%;
  height: 101px;
  padding: 0 2rem;
`;
const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: center;
  align-items: center;
`;
const TitleStyled = styled.h1`
  position: absolute;
  left: 4.51%;
  right: 86.6%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  color: #ffff;
`;
const TextStyled = styled.p`
margin-left: 160px;
padding-top: 0.5rem;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 19px;
color: #ffff;
`;
const ButtonStyled = styled.button`
  width: 90px;
  height: 45px;
  background: #FFFFFF;
  color: black;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  margin-left: 1050px;
  margin-right: 50px;
`;
const SpanStyled = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  color: #ffffff;
`;