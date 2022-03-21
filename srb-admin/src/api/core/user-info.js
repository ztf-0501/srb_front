import request from "@/utils/request";

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/core/userInfo/list/${page}/${limit}`,
      method: "get",
      params: searchObj //get请求使用params类型后台不用@RequestBody；post请求使用data类型后台需使用@RequestBody注解
    });
  },
  lock(id, status) {
    return request({
      url: `/admin/core/userInfo/lock/${id}/${status}`,
      method: "put"
    });
  },
  getuserLoginRecordTop50(userId) {
    return request({
      url: `/admin/core/userLoginRecord/listTop50/${userId}`,
      method: "get"
    });
  }
};
