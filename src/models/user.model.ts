import instance from "../utils/axios.utils";

const user = {
  UserSignup: (data?:any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/auth/user_signup";
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
  userLogin:(data?:any)=>{
    let promise = new Promise((resolve,reject)=>{
        let url:any='auth/user_login';
        instance()
        .post(url,data)
        .then((res:any)=>resolve(res.data))
        .catch((err:any)=>{
            if(err.response)
            {
                reject(err.response.data.message)
            }
            else{
                reject(err)
            }
        })
    })
    return promise
  }
  
};

export default user;
