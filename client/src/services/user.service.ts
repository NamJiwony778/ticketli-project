import axios from "axios";
import authHeader from "./data.service";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + "all");
    }

    getUserContent() {
        return axios.get(API_URL + "user", {headers: authHeader()});
    }

    getModeratorContent() {
        return axios.get(API_URL + "moderator", {headers: authHeader()})
    }

    getAdminContent() {
        return axios.get(API_URL + "admin", {headers: authHeader()});
    }
}