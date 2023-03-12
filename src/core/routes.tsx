import { useEffect, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import ROUTES from '@/constants/routes.json';
import { PrivateRoute } from '@/_utils/privateRoute';
import { setAuthToken } from '@/_utils/setAuthToken';
import { setAuth } from '@/redux/slices/userSlice';

// PUBLIC PAGES
const Login = lazy(() => import('@/pages/login'));
const Signup = lazy(() => import('@/pages/signup'));

// PRIVATE PAGES
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Reminders = lazy(() => import('@/pages/reminders'));
const Search = lazy(() => import('@/pages/search'));
const Label = lazy(() => import('@/pages/label'));
const Trash = lazy(() => import('@/pages/trash'));
const Archive = lazy(() => import('@/pages/archive'));

export function AppRoutes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.jwtToken) {
            const token = localStorage.jwtToken;
            console.log({ token });
            setAuthToken(token);

            const decoded = jwtDecode(token);

            console.log({ decoded });

            dispatch(setAuth(decoded));

            const currentTime = Date.now() / 1000;

            // if (decoded.exp < currentTime) {
            //     navigate(ROUTES.LOGIN);
            // }
        }
    }, []);

    return (
        <Routes>
            <Route
                path={ROUTES.HOME}
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTES.REMINDERS}
                element={
                    <PrivateRoute>
                        <Reminders />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTES.LABEL}
                element={
                    <PrivateRoute>
                        <Label />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTES.SEARCH}
                element={
                    <PrivateRoute>
                        <Search />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTES.TRASH}
                element={
                    <PrivateRoute>
                        <Trash />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTES.ARCHIVE}
                element={
                    <PrivateRoute>
                        <Archive />
                    </PrivateRoute>
                }
            />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
        </Routes>
    );
}
