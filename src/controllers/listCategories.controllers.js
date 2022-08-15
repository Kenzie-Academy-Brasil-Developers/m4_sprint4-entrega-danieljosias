import listCategoriesServices from '../services/listCategories.services'

const listCategoriesController = async (request,response) =>{
    const {} = request.body

    try {
        const categories = await listCategoriesServices()
        return response.json(categories)
        
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default listCategoriesController