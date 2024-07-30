
const SummaryApi = {
    signUP: {
        url: 'http://localhost:8080/api/signup',
        method: 'POST',
    },
    signIn: {
        url: 'http://localhost:8080/api/signin',
        method: 'POST',
    },
    current_user: {
        url: 'http://localhost:8080/api/user-details',
        method: "GET"
    },
    logout_user: {
        url: 'http://localhost:8080/api/userLogout',
        method: "GET"
    },
    // allUser: {
    //     url: `${backendDomin}/api/all-user`,
    //     method: 'get'
    // },
    // updateUser: {
    //     url: `${backendDomin}/api/update-user`,
    //     method: "post"
    // },
    // uploadProduct: {
    //     url: `${backendDomin}/api/upload-product`,
    //     method: 'post'
    // },
    // allProduct: {
    //     url: `${backendDomin}/api/get-product`,
    //     method: 'get'
    // },
    // updateProduct: {
    //     url: `${backendDomin}/api/update-product`,
    //     method: 'post'
    // },
    // categoryProduct: {
    //     url: `${backendDomin}/api/get-categoryProduct`,
    //     method: 'get'
    // },
    // categoryWiseProduct: {
    //     url: `${backendDomin}/api/category-product`,
    //     method: 'post'
    // },
    // productDetails: {
    //     url: `${backendDomin}/api/product-details`,
    //     method: 'post'
    // },
    // addToCartProduct: {
    //     url: `${backendDomin}/api/addtocart`,
    //     method: 'post'
    // },
    // addToCartProductCount: {
    //     url: `${backendDomin}/api/countAddToCartProduct`,
    //     method: 'get'
    // },
    // addToCartProductView: {
    //     url: `${backendDomin}/api/view-card-product`,
    //     method: 'get'
    // },
    // updateCartProduct: {
    //     url: `${backendDomin}/api/update-cart-product`,
    //     method: 'post'
    // },
    // deleteCartProduct: {
    //     url: `${backendDomin}/api/delete-cart-product`,
    //     method: 'post'
    // },
    // searchProduct: {
    //     url: `${backendDomin}/api/search`,
    //     method: 'get'
    // },
    // filterProduct: {
    //     url: `${backendDomin}/api/filter-product`,
    //     method: 'post'
    // }
}


export default SummaryApi;
