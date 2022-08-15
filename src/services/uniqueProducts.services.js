import database from "../database"

const uniqueProductsServices = async (id) =>{
    try {
        const res = await database.query('SELECT name FROM products WHERE id = $1',[id])
        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default uniqueProductsServices