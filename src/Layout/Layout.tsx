import { Nav } from '@/components/Nav/Nav';
import { NavSide } from '@/components/NavSide/NavSide';

interface ILayout {
    children: JSX.Element;
}

export function Layout({ children }: ILayout) {
    return (
        <section className='bg-slate-100 text-black dark:bg-slate-900 dark:text-white'>
            {/* head */}
            <Nav />

            {/* body */}
            <section>
                {/* left */}
                <NavSide />
                {/* right */}
                <section>{children}</section>
            </section>
        </section>
    );
}
