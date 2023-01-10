import instance from "../utils/axios.utils";

const address = {
   createAddress: (data?:any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "address/create_address";
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
  editAddress:(data?:any)=>{
    let promise = new Promise((resolve,reject)=>{
        let url:any='/address/edit_address';
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
  },
  defaultAddress:(data?:any)=>{
    let promise = new Promise((resolve,reject)=>{
        let url:any='/address/default_address';
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
  },
  removeAddress:(data?:any)=>{
    let promise = new Promise((resolve,reject)=>{
        let url:any='/address/remove_address';
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

export default address;
