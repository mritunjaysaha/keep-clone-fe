import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { AppRoutes } from '@/core/routes';

import axios from 'axios';
import { Layout } from '@/Layout/Layout';

// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <AppRoutes />
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}
