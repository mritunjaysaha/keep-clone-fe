type NavButtonProps = {
    icon: any;
    label: string;
    isActive: boolean;
    isNavSideClose: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function NavButtons({
    icon: Icon,
    label,
    isNavSideClose,
    isActive,
    onClick,
}: NavButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center ${
                isNavSideClose ? 'justify-center' : 'justify-between'
            } ${
                isActive ? 'bg-yellow-300' : ''
            } h-12 pl-4 border-1 border-transparent rounded-r-full rounded-l-none hover:bg-fuchsia-300 hover:border-blue`}
        >
            <Icon size={32} />
            <span className={`${isNavSideClose ? 'hidden' : 'w-full'} text-left ml-8 text-lg`}>
                {label}
            </span>
        </button>
    );
}
