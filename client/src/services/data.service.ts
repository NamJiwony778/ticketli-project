export default function authHeader() {
    const userData = localStorage.getItem("user");
    let user = null;
    if(userData) {
        user = JSON.parse(userData);
    }
    if(user && user.acessToken) {
        return {"x-access-token": user.acessToken}
    } else {
        return {"x-access-token": null}
    }
}