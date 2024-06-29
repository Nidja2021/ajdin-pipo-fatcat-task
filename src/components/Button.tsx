import { ButtonProps } from '@src/utils/interfaces';
import clsx from 'clsx';

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
