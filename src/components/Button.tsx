import clsx from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

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
