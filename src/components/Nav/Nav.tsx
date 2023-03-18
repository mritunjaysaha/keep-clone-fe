import { ModeSwitch } from '@/components/ModeSwitch/ModeSwitch';
import { SearchInput } from '@/components/Nav/components/SearchInput';

export function Nav() {
    return (
        <nav className='flex items-center justify-between w-screen h-16 border-b-2 border-gray-200'>
            <SearchInput placeholder='Search' />
            <ModeSwitch />
        </nav>
    );
}
