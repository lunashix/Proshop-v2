import express from 'express';
const router = express.Router();
import { 
    getProductById, 
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts
 } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/top').get(getTopProducts);//this should be before /:id route to avoid /top being treated as an id

router.route('/:id').get(getProductById)
.put(protect, admin, updateProduct)
.delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview);



export default router;