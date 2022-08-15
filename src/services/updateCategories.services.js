import database from '../database'

const updateCategoriesServices = async (name,id) =>{
    try {
        const res = await database.query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING *',[name,id])

        if(res.rows.length === 0){
            return 'Category'
        }

        return {message: 'Category updated!', category: res.rows[0]}

    } catch (error) {
        throw new Error(error)
    }
}

export default updateCategoriesServices