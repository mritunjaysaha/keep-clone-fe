type NavButtonProps = {
    icon: any;
    label: string;
    isActive: boolean;
    isNavSideOpen: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function NavButtons({
    icon: Icon,
    label,
    isNavSideOpen,
    isActive,
    onClick,
}: NavButtonProps) {
    return (
        <button onClick={onClick} className=''>
            <Icon />
            <span className={`${isNavSideOpen ? '' : 'hidden'}`}>{label}</span>
        </button>
    );
}
