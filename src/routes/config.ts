import React, { ComponentType, LazyExoticComponent, ReactNode } from 'react';

export interface IRoute {
  path: string;
  exact: boolean;
  fallback: ReactNode | null;
  component?: LazyExoticComponent<ComponentType<any>>;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
}
