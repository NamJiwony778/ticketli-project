import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    signIn(username: string, password: string) {
        return axios.post(API_URL + "sign-in", {
            username,
            password
        }).then(res => {
            if(res.data.acessToken) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }

            return res.data;
        })
    }

    logOut() {
        localStorage.removeItem("user");
    }

    signUp(username: string, email: string, password: string) {
        return axios.post(API_URL + "sign-up", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        const userData = localStorage.getItem("user");
        if(userData) return JSON.parse(userData);

        return null;
    }

}

export default new AuthService();