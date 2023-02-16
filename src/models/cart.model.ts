import instance from "../utils/axios.utils";

const cart = {
  createCart: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/cart/create_cart";
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
  getManyCart: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/cart/get_many_cart";
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

  getManyPopulateCart: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/cart/get_many_populate_cart";
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
  deleteCartById: (body: any) => {
    
    let promise = new Promise((resolve, reject) => {
      let url: any = "/cart/delete_cart_by_id";
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
  getCart: (body: any) => {
    
    let promise = new Promise((resolve, reject) => {
      let url: any = "/cart/get_cart";
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

export default cart;
