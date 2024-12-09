import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../components";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

    </Route>
    
  )
)