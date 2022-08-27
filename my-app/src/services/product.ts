export const getProducts = async () => {
  const response = await fetch(`https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`);
  const json = await response.json();
  return json;
}