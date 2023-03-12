import { useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/redux/slices/userSlice';

export default function Login() {
    const dispatch = useDispatch();

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
            })
            .catch((err) => {
                console.error('[Login]', err);
            });
    }, []);
    return <>Login</>;
}
