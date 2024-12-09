export function useAuth() {
  const {email, token, id} = {
    email: 'email',
    token: 'token',
    id: 0
  }

  return {
    isAuth: !!email,
    email, 
    token,
    id
  }
}