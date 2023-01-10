import instance from "../utils/axios.utils";

const booking = {
  createBooking: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/booking/create_booking";
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
  getManyBooking: (data?: any) => {
    let promise = new Promise((resolve, reject) => {
      let url: any = "/booking/get_many_booking";
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
  deleteBookingById: (body: any) => {
    
    let promise = new Promise((resolve, reject) => {
      let url: any = "/booking/delete_booking_by_id";
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
  getBooking: (body: any) => {
    
    let promise = new Promise((resolve, reject) => {
      let url: any = "/booking/get_booking";
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

export default booking;
