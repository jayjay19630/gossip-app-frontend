type PostType = {
    post: {id: number, title: string, content: string, user_id: number, created_at: string, updated_at: string},
    username: string,
    tags: string[],
    likes: number,
    liked_by_user: boolean
}

type PostArray = PostType[];

export type { PostType, PostArray };