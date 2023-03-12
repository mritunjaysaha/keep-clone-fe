import { Nav } from '@/components/Nav/Nav';
import { NavSide } from '@/components/NavSide/NavSide';

interface ILayout {
    children: JSX.Element;
}

export function Layout({ children }: ILayout) {
    return (
        <section>
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
