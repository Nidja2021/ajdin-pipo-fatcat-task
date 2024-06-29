import { PostSchema, PostSchemaType } from '@/components/posts/PostForm';

export interface ApiResponse {
    success: boolean;
    data?: PostResponse | PostResponse[];
    message?: string;
}

export interface PostResponse {
    title: string;
    body: string;
    id: number;
}

export async function postsList(): Promise<ApiResponse> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });

    if (response.status !== 200) {
        return {
            success: false,
            message: 'Error fetching the posts',
        };
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
        return {
            success: false,
            message: 'Error parsing users',
        };
    }

    return {
        success: true,
        data: data as PostResponse[],
    };
}

export async function createPost(
    payload: PostSchemaType
): Promise<ApiResponse> {
    const validateFields = PostSchema.safeParse(payload);

    if (!validateFields.success && validateFields.error) {
        return {
            success: false,
            message: 'Could not create a post',
        };
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.status !== 201) {
        return {
            success: false,
            message: 'Error creating a post',
        };
    }

    const data: unknown = await response.json();

    return {
        success: true,
        data: data as PostResponse,
        message: 'Post created!',
    };
}
