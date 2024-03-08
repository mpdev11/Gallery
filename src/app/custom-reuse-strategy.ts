import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  DetachedRouteHandle,
} from '@angular/router';

@Injectable()
export class CustomReuseStrategy implements RouteReuseStrategy {
  private handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data && !!route.data['reuse'];
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (route.data && route.data['reuse']) {
      this.handlers[route.routeConfig?.path || ''] = handle;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return (
      !!route.data &&
      !!route.data['reuse'] &&
      !!this.handlers[route.routeConfig?.path || '']
    );
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return !!route.data && !!route.data['reuse']
      ? this.handlers[route.routeConfig?.path || ''] || null
      : null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
