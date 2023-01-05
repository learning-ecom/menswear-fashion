import instance from "../utils/axios.utils";

const coupon = {
  createCoupon: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/coupon/create_coupon";
      instance()
        .post(url, data)
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          if (err.response) {
            reject(err.response.data.message);
          } else {
            reject(err);
          }
        });
    });
    return promise;
  },
  getManyCoupon: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/coupon/get_many_coupon";
      instance()
        .post(url, data)
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          if (err.response) {
            reject(err.response.data.message);
          } else {
            reject(err);
          }
        });
    });
    return promise;
  },

  deleteCouponById: (body: any) => {  
    let promise = new Promise((resolve, reject) => {
      let url: any = "/coupon/delete_coupon_by_id";
      instance()
        .delete(url,{ data: body })
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          if (err.response) {
            reject(err.response.data.message);
          } else {
            reject(err);
          }
        });
    });
    return promise;
  },
  getCoupon: (body: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/coupon/get_coupon";
      instance()
        .post(url, body)
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          if (err.response) {
            reject(err.response.data.message);
          } else {
            reject(err);
          }
        });
    });
    return promise;
  },
};

export default coupon;
