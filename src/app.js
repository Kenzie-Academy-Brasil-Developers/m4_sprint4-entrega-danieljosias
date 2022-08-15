import express from 'express'
import "dotenv/config";
import routerCategories from './routes/categories.routes.js'
import routerProducts from './routes/products.routes.js'
import { startDatabase } from './database/index.js'

const app = express();
app.use(express.json());

app.use('/categories',routerCategories)
app.use('/products',routerProducts)

export default app.listen(3000, () => {
  console.log("Server running");
  startDatabase()
});
