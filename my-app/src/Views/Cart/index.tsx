import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { selectCart } from "../../store/slices/cardSlice";
import { YouOrder } from "./youorder"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export function CartView () {    
    const productsCart = useSelector(selectCart)
      
    return (
        <Layout>
            {!productsCart ? (
                <Container className="d-flex flex-column align-items-center gap-4">
                    <PageTitle>Ops! Seu carrinho ainda está vazio.</PageTitle>
                    <IconStyled icon={faShoppingBag} />
                        <Link to="/">Adicionar mais itens</Link>
                </Container>
            ) : (
                <Container>
                    <StyledContainer>
                        <YouOrder products={productsCart}/>
                    </StyledContainer>
                </Container>
            )}
        </Layout>
    )
}

const StyledContainer = styled(Container)`
    max-width: 960px !important;`

const IconStyled = styled(FontAwesomeIcon)`
font-size: 400px;
color: #fff2f3;
`