import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => {
        console.log(Object.keys(collections).map(key => collections[key]))   // Object.keys doesn't modify the array, it returns a new one.
        return Object.keys(collections).map(key => collections[key])}
);

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);