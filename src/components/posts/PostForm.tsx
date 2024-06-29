import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Button } from '@/components/Button';
import { ButtonForm } from '@/components/posts/ButtonForm';
import TextareaField from '@/components/posts/TextareaField';
import TextField from '@/components/posts/TextField';
import { createPost } from '@/services/posts';

export interface FormValues {
    title: string;
    body: string;
}

export const PostSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }).max(20),
    body: z.string().min(1, 'Body is required').max(255),
});

export type PostSchemaType = z.infer<typeof PostSchema>;

export default function PostForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty, isSubmitting },
    } = useForm<PostSchemaType>({
        resolver: zodResolver(PostSchema),
        defaultValues: {
            title: '',
            body: '',
        },
    });

    const isDirtyForm = isDirty ?? false;
    const isSubmittingForm = isSubmitting ?? false;

    // const mutation = useCreatePost();

    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: createPost,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['posts'] });
            toast.success('Post created!');
        },
    });

    const onSubmit = async (data: FieldValues) => {
        await mutateAsync(data as PostSchemaType);
        reset();
    };

    return (
        <div className="w-full md:w-1/2 md:mx-auto">
            <h2 className="text-xl text-gray80 text-center font-semibold">
                Create a Post
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
            >
                <TextField
                    label="title"
                    placeholder="Title"
                    id="title"
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    register={register}
                />
                <TextareaField
                    label="body"
                    placeholder="Body"
                    id="body"
                    error={!!errors.body}
                    helperText={errors.body?.message}
                    register={register}
                />
                <div className="w-full space-x-3">
                    <Button
                        onClick={() => reset()}
                        className="bg-white !text-gray80 text-sm font-semibold border !rounded-lg"
                    >
                        Reset
                    </Button>
                    <ButtonForm disabled={!isDirtyForm || isSubmittingForm}>
                        {isPending ? 'Submitting...' : 'Submit'}
                    </ButtonForm>
                </div>
            </form>
        </div>
    );
}
