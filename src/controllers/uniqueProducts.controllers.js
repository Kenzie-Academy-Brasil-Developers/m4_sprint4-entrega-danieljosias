import uniqueProductsServices from '../services/uniqueProducts.services'

const uniqueProductsController = async (request,response) =>{
    const { id } = request.params

    try {
        const products = await uniqueProductsServices(id)
        return response.status(200).json(products)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default uniqueProductsController