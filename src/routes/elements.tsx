import Loading from "@/pages/Loading";
import { Suspense, lazy } from "react";

const Loadable = (Component: any) => {
  const LoadableComponent = (props: any) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`;
  return LoadableComponent;
};

export const Settings = Loadable(lazy(() => import("@/pages/Settings")));
export const NewTeam = Loadable(lazy(() => import("@/pages/teams/NewTeam")));
export const TeamList = Loadable(lazy(() => import("@/pages/teams/TeamList")));
export const NewUser = Loadable(lazy(() => import("@/pages/users/NewUser")));
export const UserList = Loadable(lazy(() => import("@/pages/users/UserList")));