import { Nav } from '@/components/Nav/Nav';
import { NavSide } from '@/components/NavSide/NavSide';

interface ILayout {
    children: JSX.Element;
}

export function Layout({ children }: ILayout) {
    return (
        <section className='bg-slate-100 text-black dark:bg-slate-900 dark:text-white h-screen w-screen '>
            {/* head */}
            <Nav />

            {/* body */}
            <section className='flex h-90v w-screen bg-yellow-50'>
                {/* left */}
                <NavSide />
                {/* right */}
                <section className='bg-blue-500 w-full'>{children}</section>
            </section>
        </section>
    );
}
