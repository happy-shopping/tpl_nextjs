import axios from "axios"
import { IApi } from "@/interfaces"

export const APILISTS: IApi = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  fetchItemList() {
    const url = `https://api.pping.loc/front/v3/items`
    const params = {
      idx_b_manager: 1,
      cate_id: 1010100000,
      offset: 0,
      limit: 30,
      sort: 1,
      type: "cash",
      fields: "stdpc,maker,hotdeal,event",
      maker: "",
      spec: {},
      min: 0,
      max: 0,
      keyword: ""
    }
    const config = {
      params,
      withCredentials: true,
      xsrfHeaderName: "Authorization"
    }
    return axios.get(url, config)
  }
}

export default APILISTS
