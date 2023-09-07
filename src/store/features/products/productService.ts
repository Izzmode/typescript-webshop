//Get all products
const getAllAsync = async () => {  

    const res = await fetch('https://fakestoreapi.com/products/')

    if(!res.ok) throw new Error('something went wrong when getting data')

    return res.json()
}


const productsService = {
getAllAsync
}

export default productsService
