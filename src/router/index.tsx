import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LayoutApp } from "../components";
import { RequiredAuth } from "../hoc/RequiredAuth";
import { Authors, HomePage, Login, NotFoundPage, Posts, Profile, Tags } from "../pages";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route 
        index
        element={
          <RequiredAuth>
            <HomePage />
          </RequiredAuth>
        }
      />
      <Route 
        path="profile"
        element={
          <RequiredAuth>
            <Profile />
          </RequiredAuth>
        }
      />
      <Route 
        path="post"
        element={
          <RequiredAuth>
            <Posts />
          </RequiredAuth>
        }
      />
      <Route 
        path="authors"
        element={
          <RequiredAuth>
            <Authors />
          </RequiredAuth>
        }
      />
      <Route 
        path="tags"
        element={
          <RequiredAuth>
            <Tags />
          </RequiredAuth>
        }
      />
      <Route path="login" element={<Login />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
    
  )
)