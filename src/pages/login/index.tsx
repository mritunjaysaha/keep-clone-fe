import { useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { setAuth } from '@/redux/slices/userSlice';
import ROUTES from '@/constants/routes.json';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .post(`/auth/login`, {
                email: 'keep@admin.com',
                password: '123456',
            })
            .then((res) => {
                window.localStorage.setItem('jwtToken', res.data.token);

                const decoded = jwtDecode(res.data.token);

                dispatch(setAuth(decoded));

                navigate(ROUTES.HOME);
            })
            .catch((err) => {
                console.error('[Login]', err);
            });
    }, []);
    return <>Login</>;
}
