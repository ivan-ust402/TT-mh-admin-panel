
export function useAuth() {
  const { acess_token: token, refresh_token, access_expired_at, refresh_expired_at} = {
    acess_token: 'tete', 
    refresh_token: 'etet', 
    access_expired_at: 124, 
    refresh_expired_at: 124
  }

  const {id, phone, email, name: userName, lastName, secondName, roles, status, isActive, updatedAt, createdAt} = {
    id: 0,
    phone: '444',
    email: '2@2.ru',
    // email: false,
    name: 'Ivan',
    lastName: 'Ivanov',
    secondName: 'Ivanovich',
    roles: [
      {
        role: 'admin',
        name: 'admin' 
      }
    ],
    status: {
      code: 0,
      name: 'confirmed'
    },
    isActive: true,
    updatedAt: "2019-08-24T14:15:22Z",
    createdAt: "2019-08-24T14:15:22Z"
  }

  return {
    isAuth: !!email,
    email, 
    token,
    id,
    userName,
  }
}