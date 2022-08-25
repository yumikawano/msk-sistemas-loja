import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { getProducts } from "../../services/product";
import { Layout } from "../../components/Layout";
import { product } from "../../entities/Products";
import { Button, Container } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import { Loading } from "../../components/Loading";
import { addToCart } from "../../store/slices/cardSlice"

type productsProps = product | null

export function HomeView () {
    const [Products, setProducts]:any = useState()
        useEffect(() => {
            const fetch = async ():Promise<void | productsProps > => {
                try{
                    const result = await getProducts()
                    setProducts(result)
               } catch{
                    toast.error('Erro ao carregar produtos. Tente novamente', {
                        theme: 'colored'
                    })
               }      
            }
            fetch()
        }, [])
        const dispatch = useDispatch()
    const navigate = useNavigate()
        const handleAddToCart = (item:product) => {
            dispatch(addToCart(item))
            navigate('/cart')
        }
    return (
        <Layout>
             <Container>
                {!Products ? (
                    <Loading />
                ) : (
                    <>
                      <Row>
                        {Products.map((item:product) => (
                            <Col key={item.id} className='mb-4' xs={6} md={4} lg={3}>
                            <Card className='text-center shadow h-100' key={item.name}>
                                <Card.Img variant="top" src={item.image} alt={item.name} width={220} height={220}/>
                                <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Title as='h2' className='h5'>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text as='h5'>{item.price}</Card.Text>
                                <Button onClick={() => handleAddToCart(item)}>Adicionar ao carrinho</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                     </Row>
                    </>
                )}                
            </Container>
        </Layout>
    )
}