import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AppLayout } from 'src/components';
import { RequiredAuth } from 'src/hoc/RequiredAuth';
import { AuthorDetails, Authors, HomePage, Login, NotFoundPage, PostDetails, Posts, Profile, TagDetails, Tags } from 'src/pages';
import { PostEdit } from 'src/pages/PostEdit';
import { PostAdd } from 'src/pages/PostAdd';
import { RequiredSearchParams } from 'src/hoc';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
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
        path="posts/:page?"
        element={
          <RequiredAuth>
            <Posts />
          </RequiredAuth>
        }
      />
      <Route
        path="posts/edit/:id?"
        element={
          <RequiredAuth>
            <RequiredSearchParams>
              <PostEdit />
            </RequiredSearchParams>
          </RequiredAuth>
        }
      />
      <Route
        path="posts/detail/:id?"
        element={
          <RequiredAuth>
            <RequiredSearchParams>
              <PostDetails />
            </RequiredSearchParams>
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
        path="authors/detail/:id?"
        element={
          <RequiredAuth>
            <RequiredSearchParams>
              <AuthorDetails />
            </RequiredSearchParams>
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
      <Route
        path="tags/detail/:id?"
        element={
          <RequiredAuth>
            <RequiredSearchParams>
              <TagDetails />
            </RequiredSearchParams>
          </RequiredAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>

  )
)