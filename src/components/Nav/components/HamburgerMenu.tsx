import { useNavSide } from '@/_hooks/useNavSide';
import { IoMenu, IoMenuSharp } from 'react-icons/io5';

export function HamburgerMenu() {
    const { handleNavSide } = useNavSide();

    function handleMenuButtonClick() {
        console.log('hamburger menu clicked');
        handleNavSide();
    }

    return (
        <button onClick={handleMenuButtonClick}>
            <IoMenuSharp size={24} />
        </button>
    );
}
