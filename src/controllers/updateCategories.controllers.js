import updateCategoriesServices from '../services/updateCategories.services'

const updateCategoriesController = async (request,response) =>{
    const { name } = request.body
    const { id } = request.params

    try {
        const categories = await updateCategoriesServices(name,id)
        return response.status(200).json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default updateCategoriesController