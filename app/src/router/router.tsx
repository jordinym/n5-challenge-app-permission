import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component: any) => (props: any) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// home
const Home = Loader(lazy(() => import('src/pages/Home')));


// Components
const Permissions = Loader(
  lazy(() => import('src/pages/Permission/index'))
);

const PermissionTypes = Loader(
  lazy(() => import('src/pages/PermissionType/index'))
);

// Status
const Status404 = Loader(
  lazy(() => import('src/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/pages/Status/Status500'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'home',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  },
  {
    path: 'permissions',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Permissions />
      },
      {
        path: 'types',
        element: <PermissionTypes />
      },
    ]
  }
];

export default routes;
