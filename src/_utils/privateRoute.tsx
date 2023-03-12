import { Route, Navigate } from 'react-router-dom';

import ROUTES from '@/constants/routes.json';

export function PrivateRoute({ children }) {
    const isAuthenticated = true;
    return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} />;
}
