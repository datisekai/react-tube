import { server } from "."

const AuthAction = {
    loginSocial:async(data:{token:string}) => {
        const response = await server.post('/auth/login-social',data)
        return response.data
    },
    getMyInfo:async() => {
        const response = await server.get('/auth/get-my-info');
        return response.data
    },
    verifyEmail:async(code:string) => {
        const response = await server.post('/auth/verify-email',{code});
        return response.data
    },
    register:async(data:{email:string,password:string}) => {
        const response = await server.post('/auth/register',data)
        return response.data
    },
    login:async(data:{email:string,password:string}) => {
        const response = await server.post('/auth/login',data)
        return response.data
    }
}

export default AuthAction