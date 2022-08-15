import uniqueCategoriesServices from '../services/uniqueCategories.services'

const uniqueCategoriesController = async (request,response) =>{
    const { id } = request.params

    try {
        const categories = await uniqueCategoriesServices(id)
        return response.json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default uniqueCategoriesController