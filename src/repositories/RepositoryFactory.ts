import PhotoRepository from "./PhotoRepository";
import UserRepository from "./UserRepository";

const respositories = {
    'Photo': PhotoRepository,
    'User': UserRepository
}

export default {
    get: name => respositories[name]
}