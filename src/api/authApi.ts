import { axiosInstance } from ".";

export interface Credentials {
    email: string;
    password: string
}

export interface LoginResponse {
    access_token: string,
    refresh_token: string,
    access_expired_at: number,
    refresh_expired_at: number   
}

export const login = async (credentials: Credentials): Promise<LoginResponse> => {
    const form = new FormData();
    form.append("email", credentials.email);
    form.append("password", credentials.password);
    const response = await axiosInstance.post(`/auth/token-generate`, form);
    
    return response.data;
};