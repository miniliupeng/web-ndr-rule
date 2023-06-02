import { NonIndexRouteObject } from 'react-router-dom';

export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}

export interface RouteObject extends NonIndexRouteObject {
  meta?: MetaProps;
  children?: RouteObject[];
}
