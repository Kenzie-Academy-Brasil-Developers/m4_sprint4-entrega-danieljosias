import createCategoriesService from '../services/createCategories.services'

const createCategoriesController = async (request, response) => {
    const {name} = request.body
    
    try {
        const categories = await createCategoriesService(name)
        return response.status(201).json({
            message: 'Category created!', category: categories
        })
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default createCategoriesController
