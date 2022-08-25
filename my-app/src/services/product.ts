import { product } from "../entities/Products"

export const getProducts = async ():Promise<product[]> => {
  const response = await fetch(`https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`)
  const products = await getProducts()
  const productsSnapshot = products.response.map(response => ({...response.data(),id:response.id}))
  return productsSnapshot as product[]   
}

export const getProductsById = async (id:string):Promise<product> => {
  const docProduct = response(`https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`)
  const productSnapshot = await getProducts(responseProduct)
  if (!productSnapshot.exists()) {
      throw new Error('Produto não encontrado.')
  }
  const product = productSnapshot.data()
  return {id, ...product} as product
}