import { Router } from "express";
const router = Router()

import createProductsController from "../controllers/createProducts.controllers";
import listProductsController from "../controllers/listProducts.controllers";
import uniqueProductsController from "../controllers/uniqueProducts.controllers";
import updateProductsController from "../controllers/updateProducts.controllers";
import deleteProductsController from "../controllers/deleteProducts.controllers";
import listProductsByCategoryIdController from '../controllers/ListProductsByCategoryId.controllers'

router.post('',createProductsController)
router.get('',listProductsController)
router.get('/:id',uniqueProductsController)
router.patch('/:id',updateProductsController)
router.delete('/:id',deleteProductsController)
router.get('/category/:id', listProductsByCategoryIdController)

export default router;