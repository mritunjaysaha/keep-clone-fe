import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import loadable from '@loadable/component';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import ROUTES from '@/constants/routes.json';
import { PrivateRoute } from '@/_utils/privateRoute';
import { setAuthToken } from '@/_utils/setAuthToken';
import { setAuth } from '@/redux/slices/userSlice';

const Dashboard = loadable(() => import('@/pages/dashboard'));

const Login = loadable(() => import('@/pages/login'));

const Signup = loadable(() => import('@/pages/signup'));

export function AppRoutes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.jwtToken) {
            const token = localStorage.jwtToken;
            console.log({ token });
            setAuthToken(token);

            const decoded = jwt_decode(token);
            console.log({ decoded });

            dispatch(setAuth(decoded));

            const currentTime = Date.now() / 1000;

            if (decoded.exp < currentTime) {
                navigate(ROUTES.LOGIN);
            }
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
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
        </Routes>
    );
}
