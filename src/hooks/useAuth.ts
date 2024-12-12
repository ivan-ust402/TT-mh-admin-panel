import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

export function useAuth() {
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

  const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);
  return {
    isAuth: isAuthenticated,
    loading,
    error,
    userName,
  }
}