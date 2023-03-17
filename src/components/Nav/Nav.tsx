import { ModeSwitch } from '@/components/ModeSwitch/ModeSwitch';
import { SearchInput } from '@/components/Nav/components/SearchInput';

export function Nav() {
    return (
        <nav>
            <SearchInput placeholder='Search' />
            <ModeSwitch />
        </nav>
    );
}
