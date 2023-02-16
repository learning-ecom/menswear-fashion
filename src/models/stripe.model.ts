
import instance from "../utils/axios.utils";


const stripe = {
    createStripe: (data?:any) => {
      let promise = new Promise((resolve, reject) => {
        let url: any = "/stripe/create_stripe";
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
    getStripe: (data?:any) => {
        let promise = new Promise((resolve, reject) => {
          let url: any = "/stripe/get_stripe";
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

export default stripe