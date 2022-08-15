import deleteProductsServices from '../services/deleteProducts.services.js'

const deleteProductsController = async (request,response) =>{
    const { id } = request.params

    try {
        const products = await deleteProductsServices(id)
        return response.status(204).json(products)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default deleteProductsController