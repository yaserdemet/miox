import Layout from "@/layouts/layout"
import { Outlet, createBrowserRouter } from "react-router-dom"
import { NewTeam, NewUser, Settings, TeamList, UserList } from "./elements"
import { PATH_DASHBOARD } from "./path"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path : PATH_DASHBOARD.team + "/new-team",
        element : <NewTeam />
      },
      {
        path : PATH_DASHBOARD.team + "/list",
        element : <TeamList />
      },
      {
        path : PATH_DASHBOARD.user + "/new-user",
        element : <NewUser />
      },
      {
        path : PATH_DASHBOARD.user + "/list",
        element : <UserList />
      }
    ],
  },
])
