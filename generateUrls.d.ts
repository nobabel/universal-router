import {PathFunctionOptions} from 'path-to-regexp';
import UniversalRouter, {Params} from '.';

export interface Options extends PathFunctionOptions {
  stringifyQueryParams: <T>(params: T) => string;
}

declare const generateUrls: (router: UniversalRouter, options?: Options) => (routeName: string, params: Params) => string;
export default generateUrls;
