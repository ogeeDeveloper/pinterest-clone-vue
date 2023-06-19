import AxiosClient from "./Clients/AxiosClient"

const resource = '/users'

export default {
    get(){
        return AxiosClient.get(`${resource}`)
    },
    getUser(id: string){
        return AxiosClient.get(`${resource}/${id}`)
    },
    create(payload){
        return AxiosClient.post(`${resource}`, payload)
    },
    update(payload, id:string){
        return AxiosClient.put(`${resource}/${id}`, payload)
    },
    delete(id:string){
        return AxiosClient.delete(`${resource}/${id}`)
    }
}