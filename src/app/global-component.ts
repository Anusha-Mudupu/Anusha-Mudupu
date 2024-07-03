/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
export const GlobalComponent = {
    // Api Calling
    API_URL: 'https://api-node.themesbrand.website/',
    // API_URL : 'http://127.0.0.1:3000/',
    headerToken: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },

    // Auth Api
    // AUTH_API: "https://api-node.themesbrand.website/auth/",
    // AUTH_API:"http://127.0.0.1:3000/auth/",
    // AUTH_API:'http://13.201.200.0/crm-api/api/Auth/login',
    AUTH_API:'http://13.201.200.0/kapil-crm-api/api/auth/login',

    // Products Api
    product: 'apps/product',
    productDelete: 'apps/product/',

    // Orders Api
    order: 'apps/order',
    orderId: 'apps/order/',

    // Customers Api
    customer: 'apps/customer',
}