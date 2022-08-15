import listProductsServices from '../services/listProducts.services'

const listProductsController = async (request,response) =>{
    const {} = request.body

    try {
        const products = await listProductsServices()
        return response.json(products)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default listProductsController