import { server } from "."

const AuthAction = {
    loginSocial:async(data:{token:string}) => {
        const response = await server.post('/auth/login-social',data)
        return response.data
    },
    getMyInfo:async() => {
        const response = await server.get('/auth/get-my-info');
        return response.data
    }
}

export default AuthAction