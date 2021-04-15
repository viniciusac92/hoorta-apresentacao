export const getStores = () => `/stores`;
export const getOneStore = (id) => `/stores/${id}`;
export const getUserStore = (id) => `/stores?userId=${id}`;
export const postStore = () => `/stores`;
export const patchStore = (id) => `/stores/${id}`;
export const deleteStore = (id) => `/stores/${id}`;
