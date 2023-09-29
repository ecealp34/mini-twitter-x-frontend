import { myAxios } from "./helper"

export const signUp = (user) => {
    return myAxios
    .post("/profile/register", user)
    .then((response) => response.json());
}
