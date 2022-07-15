import { Http } from '../../../api/http';

const API_ENDPOINT = {
    GET_PRODUCT: '/products',
    CREATE_PRODUCT: '/create',
    UPDATE_PRODUCT: '/update',
    DELETE_PRODUCT: '/delete',
}

class ProductServices{ 
    getProduct() {
        return Http.get(API_ENDPOINT.GET_PRODUCT)
    }
}

const ProductService = new ProductServices();
export default ProductService;