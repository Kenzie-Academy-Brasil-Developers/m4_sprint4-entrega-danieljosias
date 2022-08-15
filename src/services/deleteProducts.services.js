import database from "../database";

const deleteProductsServices = async (id) =>{
    try {
        const res = await database.query('DELETE FROM products WHERE id = $1 RETURNING *',[id])
     
        if(res.rows.length === 0){
            return 'Product not found!'
        }

        return 'Product deleted!'

    } catch (error) {
        throw new Error(error)
    }
}

export default deleteProductsServices