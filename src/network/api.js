import { service, get } from "@/utils/request";
// 获取用户列表
export function getList(params) {
  return get("/api/getlist", params);
}
