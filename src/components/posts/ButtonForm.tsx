import { ButtonProps } from '@src/utils/interfaces';
import clsx from 'clsx';

export const ButtonForm = ({
    children,
    onClick,
    className,
    disabled,
}: ButtonProps) => {
    const buttonStyle = clsx(
        'rounded-lg px-4 py-2 bg-black text-white text-sm',
        className,
        {
            'bg-gray60': disabled,
        }
    );

    return (
        <button
            type="submit"
            className={buttonStyle}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
