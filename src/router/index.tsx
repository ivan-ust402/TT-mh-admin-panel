import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LayoutApp } from "../components";
import { RequiredAuth } from "../hoc/RequiredAuth";
import { Authors, HomePage, Login, NotFoundPage, Posts, Profile, Tags, WelcomePage } from "../pages";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route
        index
        element={<WelcomePage />}
      />
      <Route 
        path="home"
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
        path="posts"
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