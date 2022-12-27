import instance from "../utils/axios.utils";

const product= {
  getAllProduct: (data?:any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/product/get_all_product";
      instance()
        .post(url, data)
        .then((res:any) => resolve(res.data))
        .catch((err:any) => {
          if (err.response) {
            reject(err.response.data.message);
          } else {
            reject(err);
          }
        });
    });
    return promise;
  },
}


export default product;