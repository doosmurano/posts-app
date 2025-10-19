import { Album } from "@/entities/album/model/types";
import { Photo } from "@/entities/photo/model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
    reducerPath: "albumsApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://jsonplaceholder.typicode.com" 
    }),

    tagTypes: ["Album", "Photo"],

    endpoints: (builder) => ({
        getAlbums: builder.query<Album[], void>({
            query: () => "albums",
            providesTags: (result) =>
                result
            ?[
                ...result.map(({ id }) => ({ type: "Album" as const, id })),
                { type: "Album", id: "LIST"},
            ]
            : [{ type: "Album", id: "LIST" }],
        }),

        getAlbumById: builder.query<Album, number>({
            query: (id) => `albums/${id}`,
            providesTags: (_, __, id) => [{type: "Album", id}],
        }),

        getAlbumsByUserId: builder.query<Album[], number>({
            query: (userId) => `albums?userId=${userId}`,
            providesTags: (result, _, userId) =>
               result
            ?[
                ...result.map(({ id }) => ({ type: "Album" as const, id })),
                { type: "Album", id: `USER_${userId}` },
            ]
            : [{ type: "Album", id: `USER_${userId}` }],
        }),

        getPhotosByAlbumId: builder.query<Photo[], number>({
            query: (albumId) => `albums/${albumId}/photos`,
            providesTags: (result, _, albumId) =>
               result
            ?[
                ...result.map(({ id }) => ({ type: "Photo" as const, id })),
                { type: "Photo", id: albumId },
            ]
            : [{ type: "Photo", id: albumId }],
        }),
    }),
})

export const { 
    useGetAlbumsQuery, 
    useGetAlbumByIdQuery, 
    useGetAlbumsByUserIdQuery, 
    useGetPhotosByAlbumIdQuery
} = albumsApi;
