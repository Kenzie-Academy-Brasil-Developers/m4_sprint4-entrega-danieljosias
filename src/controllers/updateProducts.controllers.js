import updateProductsServices from '../services/updateProducts.services'

const updateProductsController = async (request,response) =>{
    const { name} = request.body
    const { id } = request.params

    try {
        const products = await updateProductsServices(name,id)
        return response.status(200).json(products)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default updateProductsController