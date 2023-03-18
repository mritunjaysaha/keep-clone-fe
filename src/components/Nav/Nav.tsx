import { ModeSwitch } from '@/components/ModeSwitch/ModeSwitch';
import { HamburgerMenu } from '@/components/Nav/components/HamburgerMenu';
import { SearchInput } from '@/components/Nav/components/SearchInput';
import { IoMenu } from 'react-icons/io5';

export function Nav() {
    return (
        <nav className='flex items-center justify-between w-screen h-16 border-b-2 border-gray-200 p-2'>
            <HamburgerMenu />
            <SearchInput placeholder='Search' />
            <ModeSwitch />
        </nav>
    );
}
