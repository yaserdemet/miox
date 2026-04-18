import Loading from "@/pages/Loading";
import { Suspense, lazy, type ElementType } from "react";

const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);

export const About = Loadable(lazy(() => import("@/pages/About")));
export const DamageProcess = Loadable(lazy(() => import("@/pages/damage-process-page")));
export const DamageDetails = Loadable(lazy(() => import("@/pages/damage-details-page")));
export const Settings = Loadable(lazy(() => import("@/pages/Settings")));