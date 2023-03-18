import { ChangeEvent, useDeferredValue, useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

type SearchInputProps = {
    placeholder: string;
};

export function SearchInput({ placeholder }: SearchInputProps) {
    const [val, setVal] = useState<string>('');
    const deferredValue = useDeferredValue(val);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setVal(e.target.value);
    }

    function handleCloseClick() {
        console.log('Search close clicked');
    }

    return (
        <form className='flex items-center h-12 bg-gray-600 p-4 rounded-md '>
            <BiSearchAlt2 size={20} className='mr-2 text-white' />
            <input
                className='bg-inherit w-96 pl-4 h-8 placeholder-white text-white focus:outline-none'
                value={val}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <button className='ml-2' onClick={handleCloseClick}>
                <IoCloseOutline size={24} className='text-white text-16 cursor-pointer' />
            </button>
        </form>
    );
}
