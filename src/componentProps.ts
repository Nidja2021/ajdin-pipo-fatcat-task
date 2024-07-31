import { Hero } from '@/components/Hero';
import { Landing, LandingProps } from '@/components/landing/Landing';
import Posts, { PostsProps } from '@/components/posts/Posts';
import Users, { UsersProps } from '@/components/users/Users';
import { HeroProps } from '@/utils/interfaces';

export type ComponentType = 'Users' | 'Posts' | 'Landing' | 'Hero';

export type ComponentProps =
    | { type: 'Landing'; props: LandingProps; path?: '/' }
    | { type: 'Users'; props: UsersProps; path?: '/users' }
    | { type: 'Posts'; props: PostsProps; path?: '/posts' }
    | { type: 'Hero'; props: HeroProps };

export { Users, Posts, Landing, Hero };
