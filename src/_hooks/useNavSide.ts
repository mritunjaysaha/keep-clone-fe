import { setNavSide } from '@/redux/slices/globalSlice';
import { useDispatch, useSelector } from 'react-redux';

type useNavSideReturn = {
    isNavSideClose: boolean;
    handleNavSide: Function;
};

export function useNavSide(): useNavSideReturn {
    const dispatch = useDispatch();

    const { isNavSideClose } = useSelector((state) => state.global);

    function handleNavSide() {
        dispatch(setNavSide(!isNavSideClose));
    }

    return { isNavSideClose, handleNavSide };
}
