import { Http } from '../../../api/http';

const API_ENDPOINT = {
    GET_PRODUCT: '/products',
    CREATE_PRODUCT: '/products',
    UPDATE_PRODUCT: '/products',
    DELETE_PRODUCT: '/products',
}

class ProductServices{ 
    getProduct() {
        return Http.get(API_ENDPOINT.GET_PRODUCT)
    }

    getOneProduct(id){
        return Http.get(API_ENDPOINT.GET_PRODUCT +  `/${id}`);
    }

    createProduct(payload){
        return Http.post(API_ENDPOINT.CREATE_PRODUCT, payload)
    }

    updateProduct(id ,payload){
        return Http.post(API_ENDPOINT.UPDATE_PRODUCT + `/${id}`, payload)
    }

    deleteProduct(id){
        return Http.delete(API_ENDPOINT.CREATE_PRODUCT + `/${id}`)
    }
}

const ProductService = new ProductServices();
export default ProductService;