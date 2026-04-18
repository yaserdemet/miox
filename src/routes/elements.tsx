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

export const DamageProcess = Loadable(lazy(() => import("@/pages/damage-process-page")));
export const DamageDetails = Loadable(lazy(() => import("@/pages/damage-details-page")));
export const Settings = Loadable(lazy(() => import("@/pages/Settings")));