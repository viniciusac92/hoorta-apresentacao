export const postProduct = () => `/products`;
export const getProducts = (userId, storeId) =>
  `/products?userId=${userId}&storeId=${storeId}`;
export const patchProduct = (id) => `/products/${id}`;
export const deleteProduct = (id) => `/products/${id}`;
