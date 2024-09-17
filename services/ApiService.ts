import { IUpdatePageDataProps } from "@interfaces/common";
import { InfoType } from "@customTypes/mainTypes";
import axios from "axios";

class ApiService {
  static apiBase = process.env.NEXT_PUBLIC_API_URL;

  static async getPageData<T>(
    endpoint: string
  ): Promise<T> {
    const res = await fetch(
      `${ApiService.apiBase}/api/${endpoint}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    const data: T = await res.json();
    return data;
  }

  static async createFeedback(info: InfoType) {
    const res = await axios.post("/api/feedback", info);
    return res.data;
  }

  static async getFeedback() {
    const res = await axios.get("/api/feedback");
    return res.data;
  }

  static async updatePageData({
    endPoint,
    formDataToSend,
  }: IUpdatePageDataProps) {
    const res = await axios.patch(
      `/api/${endPoint}`,
      formDataToSend
    );
    return res.data;
  }
}

export default ApiService;
