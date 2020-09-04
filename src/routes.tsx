/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from './layouts/Auth';
import { Main } from './layouts/Main';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: (): JSX.Element => <Redirect to="/presentation" />
    },
    {
        path: '/auth',
        component: Auth,
        routes: [
            {
                path: '/auth/login',
                exact: true,
                component: lazy(() =>
                    import('./views/Login').then(({ Login }) => ({
                        default: Login
                    }))
                )
            },
            {
                component: (): JSX.Element => (
                    <Redirect to="/errors/error-404" />
                )
            }
        ]
    },
    //   {
    //     path: '/errors',
    //     component: ErrorLayout,
    //     routes: [
    //       {
    //         path: '/errors/error-401',
    //         exact: true,
    //         component: lazy(() => import('views/Error401'))
    //       },
    //       {
    //         path: '/errors/error-404',
    //         exact: true,
    //         component: lazy(() => import('views/Error404'))
    //       },
    //       {
    //         path: '/errors/error-500',
    //         exact: true,
    //         component: lazy(() => import('views/Error500'))
    //       },
    //       {
    //         component: () => <Redirect to="/errors/error-404" />
    //       }
    //     ]
    //   },
    {
        route: '*',
        component: Main,
        routes: [
            {
                path: '/presentation',
                exact: true,
                component: (): JSX.Element => <span> THIS IS PRESENTATION</span>
            },
            {
                component: (): JSX.Element => (
                    <Redirect to="/errors/error-404" />
                )
            }
        ]
    }
];

export default routes;
