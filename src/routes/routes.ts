import { lazy, LazyExoticComponent } from 'react';
import { LazyPages1, LazyPages2, LazyPages3, NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(()=> import(/*webpackChunkName: "Lazy Page 1*/'../01-lazyload/pages/LazyPages1'));
const LazyLayout = lazy(()=> import(/*webpackChunkName: "Lazy Page 2*/'../01-lazyload/layout/LazyLayout'));
export const routes: Route[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout-Dash'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: NoLazy,
        name: 'No Lazy'
    },
 
]