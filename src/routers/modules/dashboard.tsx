import React from 'react';
import lazyLoad from '@/routers/utils/lazyLoad';
import { LayoutIndex } from '@/layouts';
import { RouteObject } from '@/routers/interface';

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '/dashboard/dataVisualize',
        element: lazyLoad(React.lazy(() => import('@/views/dashboard/dataVisualize/index'))),
        meta: {
          requiresAuth: true,
          title: '规则概况',
          key: 'dataVisualize'
        }
      }
    ]
  }
];

export default dashboardRouter;
