import { IoMenu, IoMenuSharp } from 'react-icons/io5';

export function HamburgerMenu() {
    function handleMenuButtonClick() {
        console.log('hamburger menu clicked');
    }

    return (
        <button onClick={handleMenuButtonClick}>
            <IoMenuSharp size={24} />
        </button>
    );
}
