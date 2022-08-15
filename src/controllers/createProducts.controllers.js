import createProductsService from '../services/createProducts.services'

const createProductsController = async (request, response) => {
    const { name, price, category_id } = request.body
    
    try {
        const products = await createProductsService(name,price,category_id)
        return response.status(201).json(products)
        
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default createProductsController