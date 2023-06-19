import AxiosClient from "./Clients/AxiosClient";

const resource = '/photos'

export default {
    get(){
        return AxiosClient.get(`${resource}`)
    },
    getPhotoById(id:string){
        return AxiosClient.get(`${resource}/${id}`)
    },
    create(payload){
        return AxiosClient.post(`${resource}`, payload)
    },
    update(payload, id){
        return AxiosClient.put(`${resource}/${id}`, payload)
    },
    delete(id){
        return AxiosClient.delete(`${resource}/${id}`)
    },
    // Other routes if any
}