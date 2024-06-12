import axios from "axios";

class ApiService {
  static apiBase = process.env.NEXTAUTH_URL;

  static async getData<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${ApiService.apiBase}/api/${endpoint}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    const data: T = await res.json();
    return data;
  }

  // static async registration(userData) {
  //   const response = await axios.post(
  //     `${ApiService.apiBase}/users/registration`,
  //     userData
  //   );
  //   localStorage.setItem("token", response.data.accessToken);
  //   return response.data;
  // }

  // static async login(data) {
  //   const response = await axios.post(
  //     `${ApiService.apiBase}/users/login`,
  //     data
  //   );
  //   localStorage.setItem("token", response.data.accessToken);
  // }

  // static async getCollections({ page, limit, userPage }) {
  //   let URL = `${ApiService.apiBase}/collections?page=${page}&limit=${limit}`;
  //   if (userPage)
  //     URL = `${ApiService.apiBase}/collections/my?page=${page}&limit=${limit}`;

  //   const response = await axios.get(URL, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   });
  //   const { collections, total } = response.data;
  //   return { data: collections, total };
  // }

  // static async getOneCollection({ collectionName }) {
  //   if (collectionName === null) return collectionName;
  //   const response = await axios.get(
  //     `${ApiService.apiBase}/collections/${collectionName}`,
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );
  //   return { data: response.data };
  // }

  // static async getItems({
  //   page,
  //   limit,
  //   collectionName = null,
  //   searchText = null,
  // }) {
  //   const response = await axios.get(
  //     `${ApiService.apiBase}/items?page=${page}&limit=${limit}${
  //       collectionName ? `&collectionName=${collectionName}` : ""
  //     }${searchText ? `&searchText=${searchText}` : ""}`,
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );

  //   const { userItems, total } = response.data;
  //   return { data: userItems, total };
  // }

  // static async getOneItem({ itemName }) {
  //   const response = await axios.get(
  //     `${ApiService.apiBase}/items/${itemName}`,
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );
  //   return response;
  // }

  // static async deleteItems(idsToDelete) {
  //   await axios.delete(`${ApiService.apiBase}/items`, {
  //     data: { idsToDelete },
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   });
  // }

  // static async updateItem(updatedData, id) {
  //   await axios.patch(
  //     `${ApiService.apiBase}/items/${id}`,
  //     { ...updatedData },
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );
  // }

  // static async createItem(data) {
  //   const response = await axios.post(`${ApiService.apiBase}/items`, data, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   });
  //   return response.data[0];
  // }

  // static async getUserInfo() {
  //   const response = await axios.get(`${ApiService.apiBase}/users/me`, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   });
  //   const { exp, iat, ...restData } = response.data;
  //   return restData;
  // }

  // static async getAllUsers() {
  //   const response = await axios.get(`${ApiService.apiBase}/users`, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   });
  //   return response;
  // }

  // static async changeUsersStatus(blockStatus, ids) {
  //   const response = await axios.post(
  //     `${ApiService.apiBase}/users`,
  //     { blockStatus, ids },
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );
  //   return response.data;
  // }

  // static async deleteUsers(ids) {
  //   const response = await axios.delete(`${ApiService.apiBase}/users`, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     data: { ids },
  //   });
  //   return response;
  // }

  // static async deleteCollection(collectionName) {
  //   await axios.delete(`${ApiService.apiBase}/collections/${collectionName}`, {
  //     name: collectionName,
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   });
  // }

  // static async updateCollection(updatedData, id) {
  //   const response = await axios.patch(
  //     `${ApiService.apiBase}/collections/${id}`,
  //     updatedData,
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );
  //   return response.data;
  // }

  // static async createCollection(data) {
  //   const response = await axios.post(
  //     `${ApiService.apiBase}/collections`,
  //     data,
  //     {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     }
  //   );

  //   return response.data;
  // }

  // static async getTags() {
  //   const response = await axios.get(`${ApiService.apiBase}/tags`);
  //   return response.data;
  // }
}

export default ApiService;
