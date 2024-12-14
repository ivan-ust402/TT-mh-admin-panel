import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { LayoutApp } from 'src/components';
import { RequiredAuth } from 'src/hoc/RequiredAuth';
import { Authors, HomePage, Login, NotFoundPage, PostDetails, Posts, Profile, Tags } from 'src/pages';
import { PostEdit } from 'src/pages/PostEdit';
import { PostAdd } from 'src/pages/PostAdd';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route
        index
        element={<HomePage />}
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
        path="posts/:id"
        element={
          <RequiredAuth>
            <PostDetails />
          </RequiredAuth>
        }
      />
      <Route
        path="posts/:id/edit"
        element={
          <RequiredAuth>
            <PostEdit />
          </RequiredAuth>
        }
      />
      <Route
        path="posts/add"
        element={
          <RequiredAuth>
            <PostAdd />
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
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>

  )
)