export function NavSide() {
    const isNavSideOpen = false;

    return <section className={`${isNavSideOpen ? 'w-12' : 'w-60'} bg-red-500 h-full`}></section>;
}
