import {createStore} from "vuex"
import RepositoryFactory from "../repositories/RepositoryFactory"

const Photos = RepositoryFactory.get("Photos")
const Users = RepositoryFactory.get("Users")

const store = createStore({
    state: {
        photos: [],
    },
    mutations:{},
    actions:{
        async getPhoto(context, id){
            const photo = await Photos.getPhoto(id)
            context.commit('ADD_NEW_PHOTO', photo)
        },
        async getUsers(context){
            const users = await Users.get();
            context.commit('ADD_USERS', users)
        }
    }
})

export default store