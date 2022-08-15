import ListProductsByCategoryIdServices from '../services/ListProductsByCategoryId.Services'

const ListProductsByCategoryIdController = async (request,response) => {
    const { id } = request.params

    try {
        const products = await ListProductsByCategoryIdServices(id)
        return response.status(200).json(products)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default ListProductsByCategoryIdController