import { ChangeEvent, useDeferredValue, useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

type SearchInputProps = {
    placeholder: string;
};

export function SearchInput({ placeholder }: SearchInputProps) {
    const [val, setVal] = useState<string>('');
    const deferredValue = useDeferredValue(val);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setVal(e.target.value);
    }

    return (
        <form>
            <BiSearchAlt2 />
            <input value={val} placeholder={placeholder} onChange={handleChange} />

            {deferredValue}
        </form>
    );
}
