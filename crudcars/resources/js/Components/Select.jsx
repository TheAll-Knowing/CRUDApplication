import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ options = null, className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
            {options.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))}
        </select>
    );
});
