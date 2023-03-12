import { ReactComponent as IconSun } from '@/assets/sun.svg';
import { ReactComponent as IconMoon } from '@/assets/moon.svg';
import { useDarkMode } from '@/_hooks/useDarkMode';

export const ModeSwitch = () => {
    const [isDark, setIsDark] = useDarkMode();

    return (
        <div className='flex w-[5.6rem] items-center justify-between'>
            <IconSun />
            <div>
                <input
                    type='checkbox'
                    id='toggle'
                    checked={isDark}
                    onChange={(e: React.ChangeEvent<HTMLInputElement> | undefined) => {
                        if (e) {
                            setIsDark(e.target.checked);
                        }
                    }}
                    className='absolute -top-12 opacity-0'
                />
                <label htmlFor='toggle'>
                    <span className='block h-0 w-0 opacity-0'>Mode toggle</span>
                    <span className='group flex h-[1.4rem] w-[2.8rem] cursor-pointer items-center rounded-full bg-white p-[0.4rem]'>
                        <span className='toggle-dot bg-slate-900 group-hover:bg-slate-500 h-[0.8rem] w-[0.8rem] rounded-full duration-300 ease-in-out'></span>
                    </span>
                </label>
            </div>
            <IconMoon />
        </div>
    );
};
