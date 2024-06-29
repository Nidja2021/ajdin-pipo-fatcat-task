import clsx from 'clsx';

import { ButtonProps } from '@/utils/interfaces';

export const Button = ({ children, onClick, className }: ButtonProps) => {
    const buttonStyle = clsx(
        'rounded-lg px-4 py-2 bg-black text-white',
        className
    );

    return (
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};
