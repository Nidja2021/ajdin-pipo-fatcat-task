import { UseFormRegister } from 'react-hook-form';

export interface TextFieldProps {
    label: string;
    id: string;
    placeholder: string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
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
            <textarea
                placeholder={props.placeholder}
                id={props.id}
                className="p-3 border border-gray60 rounded-md"
                {...props.register('body')}
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
