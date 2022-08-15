import { Router } from 'express'
const router = Router()

import createCategoriesController from '../controllers/createCategories.controllers'
import deleteCategoriesControllers from '../controllers/deleteCategories.controllers'
import listCategoriesController from '../controllers/listCategories.controllers'
import uniqueCategoriesController from '../controllers/uniqueCategories.controllers'
import updateCategoriesController from '../controllers/updateCategories.controllers'

router.post('',createCategoriesController)
router.get('',listCategoriesController)
router.get('/:id',uniqueCategoriesController)
router.patch('/:id',updateCategoriesController)
router.delete('/:id',deleteCategoriesControllers)

export default router;