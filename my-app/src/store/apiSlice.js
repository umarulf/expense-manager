import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

 
const baseURI = 'http://localhost:8080';
 
export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURI}),
    endpoints : builder => ({
        // get categories
        getCategories : builder.query({
            // get: 'http://localhost:8080/api/categories'
            query: () => '/v1/category',
            providesTags: ['categories']
        }),
 
        // get labels
        getLabels : builder.query({
            // get: 'http://localhost:8080/api/labels'
            query : () => '/v1/transaction/labels',
            providesTags: ['transaction']
        }),
 
        // add new Transaction
        addTransaction : builder.mutation({
            query : (initialTransaction) => ({
                  // post: 'http://localhost:8080/api/transaction'
                url: '/v1/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),
 
        // delete record
        deleteTransaction : builder.mutation({
            query : recordId => ({
                // delete: 'http://localhost:8080/api/transaction'
                url : `/v1/transaction/${recordId}`,
                method : "DELETE",
            }),
            invalidatesTags: ['transaction']
        })
 
    })
})
 
export default apiSlice;

// og