import { Routes, Route } from 'react-router';
import loadable from '@loadable/component';

import ROUTES from '@/constants/routes.json';

const Dashboard = loadable(() => import('@/pages/dashboard'));

const Login = loadable(() => import('@/pages/login'));

const Signup = loadable(() => import('@/pages/signup'));

export function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Dashboard />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
        </Routes>
    );
}
