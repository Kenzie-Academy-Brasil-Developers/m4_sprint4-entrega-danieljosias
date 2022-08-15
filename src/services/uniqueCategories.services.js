import database from "../database"

const uniqueCategoriesServices = async (id) =>{
    try {
        const res = await database.query('SELECT name FROM categories WHERE id = $1',[id])
        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default uniqueCategoriesServices