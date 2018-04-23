import pathToRegexp, {Key} from 'path-to-regexp';

export interface Context {
  [key: string]: any;
}

export interface Params {
  [key: string]: string;
}

export interface ActionContext<T = any> extends Context {
  baseUrl: string;
  keys: Key[];
  next: (resume?: boolean, parent?: ActionRoute, prevResult?: any) => Promise<any>;
  params: Params;
  path: string;
  pathname: string;
  route: ActionRoute<T>;
  router: UniversalRouter;
}

export interface ResolveContext extends Context {
  pathname: string;
}

export interface Route<T = any> {
  action: (context: ActionContext<T>, params: Params) => T;
  children?: Array<Route>;
  name?: string;
  path?: string;
}

export interface ActionRoute<T = any> extends Route<T> {
  parent: ActionRoute<any>;
}

export interface RouteError extends Error {
  code: number;
  context: ActionContext;
}

export interface Options {
  baseUrl: string;
  context: Context;
  errorHandler: (error: RouteError) => any;
  resolveRoute: (context: ActionContext, params: Params) => any;
}

declare class UniversalRouter {
  public static pathToRegexp: typeof pathToRegexp;
  public constructor(context: Route | Route[], options?: Options)
  public resolve(pathnameOrContext: string | ResolveContext): Promise<any>;
}

export default UniversalRouter;
