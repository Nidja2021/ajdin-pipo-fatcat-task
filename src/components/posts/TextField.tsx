import { UseFormRegister } from 'react-hook-form';

export interface TextFieldProps {
    label: string;
    type?: string;
    id: string;
    placeholder: string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    autoFocus?: boolean;
    register: UseFormRegister<{
        title: string;
        body: string;
    }>;
}

export default function TextField(props: TextFieldProps) {
    return (
        <div className="w-full flex flex-col gap-3">
            <label
                htmlFor={props.id}
                className="text-sm font-semibold text-gray60 uppercase"
            >
                {props.label}
            </label>
            <input
                type={props.type ?? 'text'}
                placeholder={props.placeholder}
                id={props.id}
                className="p-3 border border-gray60 rounded-md"
                autoFocus={props.autoFocus ?? true}
                {...props.register('title')}
            />
            {props.error && (
                <div>
                    <p className="text-sm text-red font-semibold">
                        {props.helperText}
                    </p>
                </div>
            )}
        </div>
    );
}
