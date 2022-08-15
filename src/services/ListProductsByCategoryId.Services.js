import database from "../database";

const ListProductsByCategoryIdServices = async (id) => {
    try {
        const res = await database.query('SELECT products.name,products.price,categories.name as category FROM products INNER JOIN categories ON products.category_id = categories.id WHERE categories.id = $1 ',[id])
        return res.rows

    } catch (error) {
        throw new Error(error)
    }
}

export default ListProductsByCategoryIdServices