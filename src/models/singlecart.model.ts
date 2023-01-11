import instance from "../utils/axios.utils";

const singleCart = {
  createSingleCart: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/singlecart/create_singlecart";
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
 
  getSingleCart: (body: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/singlecart/get_singlecart";
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

export default singleCart;
