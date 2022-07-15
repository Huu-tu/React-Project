import { Http } from '../../../api/http';

const API_ENDPOINT = {
    GET_PRODUCT: '/products',
    CREATE_PRODUCT: '/products',
    UPDATE_PRODUCT: '/update',
    DELETE_PRODUCT: '/delete',
}

class ProductServices{ 
    getProduct() {
        return Http.get(API_ENDPOINT.GET_PRODUCT)
    }

    createProduct(payload){
        return Http.post(API_ENDPOINT.CREATE_PRODUCT, payload)
    }
}

const ProductService = new ProductServices();
export default ProductService;