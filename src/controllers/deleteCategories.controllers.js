import deleteCategoriesServices from '../services/deleteCategories.services'

const deleteCategoriesControllers = async (request,response) =>{
    const { id } = request.params

    try {
        const categories = await deleteCategoriesServices(id)
        return response.status(204).json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default deleteCategoriesControllers