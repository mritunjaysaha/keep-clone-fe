import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { AppRoutes } from '@/core/routes';

import axios from 'axios';

// @ts-ignore
axios.defaults.baseURL = process.env.BASE_URL;

export function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Provider>
    );
}
