import database from "../database";

const deleteCategoriesServices = async (id) =>{
    try {
        const res = await database.query('DELETE FROM categories WHERE id = $1 RETURNING *',[id])
        
        if(res.rows.length === 0){
            return 'Category not found!'
        }

        return 'Category deleted!'

    } catch (error) {
        throw new Error(error)
    }
}

export default deleteCategoriesServices