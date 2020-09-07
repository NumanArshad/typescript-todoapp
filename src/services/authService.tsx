import { login_user } from "../interfaces"

export const storeUser = (response: any,history:any) => {
    const { name, picture: { data: { url } } } = response.profile
    const user_data: login_user = { profile: url, name: name, accesstoken: response.tokenDetail.accessToken }
    localStorage.setItem("user", JSON.stringify(user_data))
    history.push('/todo')
}

export const logoutUser = (history: any) => {
    localStorage.clear()
    history.replace("/login")
}

export const verifyAuthUser = async (history: any) => {
    if ((localStorage.getItem("user") as string)) {
        const token: string = JSON.parse((localStorage.getItem("user") as string)).accesstoken
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
        if (response.status === 200) {
            history.push("/todo")
        }
    }
}

export const getAuthUser = (): login_user => {
    const user: login_user = JSON.parse((localStorage.getItem("user") as string))
    return user
}
