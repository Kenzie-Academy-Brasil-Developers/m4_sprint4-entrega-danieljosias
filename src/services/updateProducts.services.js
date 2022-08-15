import database from '../database'

const updateProductsServices = async (name,id) =>{
    try {
        const res = await database.query('UPDATE products SET name = $1 WHERE id = $2 RETURNING *',[name,id])

        if(res.rows.length === 0){
            return 'Product not found'
        }

        return {message: 'Product updated!', product: res.rows[0]}

    } catch (error) {
        throw new Error(error)
    }
}

export default updateProductsServices