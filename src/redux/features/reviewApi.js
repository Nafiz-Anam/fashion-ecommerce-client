import { apiSlice } from "../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        addReview: builder.mutation({
            query: (data) => ({
                url: "https://fashion-ecommerce-server.onrender.com/api/review/add",
                method: "POST",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "Products",
                { type: "Product", id: arg.productId },
            ],
        }),
    }),
});

export const { useAddReviewMutation } = reviewApi;
