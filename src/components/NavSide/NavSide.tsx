import { NavButtons } from '@/components/NavSide/components/NavButtons';
import { BsLightbulb } from 'react-icons/bs';

export function NavSide() {
    const isNavSideClose = false;

    return (
        <section className={`flex flex-col ${isNavSideClose ? 'w-16' : 'w-60'} bg-red-500 h-full`}>
            <NavButtons
                icon={BsLightbulb}
                label='notes'
                isActive={true}
                isNavSideClose={isNavSideClose}
                onClick={() => {
                    console.log('notes clicked');
                }}
            />

            <NavButtons
                icon={BsLightbulb}
                label='notes'
                isActive={false}
                isNavSideClose={isNavSideClose}
                onClick={() => {
                    console.log('notes clicked');
                }}
            />

            <NavButtons
                icon={BsLightbulb}
                label='notes'
                isActive={false}
                isNavSideClose={isNavSideClose}
                onClick={() => {
                    console.log('notes clicked');
                }}
            />
        </section>
    );
}
