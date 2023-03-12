import { useEffect } from 'react';
import axios from 'axios';

export default function Signup() {
    useEffect(() => {
        axios
            .post('/auth/signup', {
                email: 'keep@admin.com',
                password: '123456',
                firstName: 'Test',
                lastName: 'Admin',
            })
            .then((res) => {
                console.log('[Signup]', { res });
            })
            .catch((err) => {
                console.error('[Signup]', err);
            });
    }, []);

    return <>Signup</>;
}
