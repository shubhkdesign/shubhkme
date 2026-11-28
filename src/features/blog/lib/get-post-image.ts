import type { Post } from "@/features/blog/types/post";

/**
 * The post's cover image, or the generated title card when the post has none.
 * Used for the post list cards, Open Graph tags and JSON-LD so they always agree.
 */
export function getPostImage(post: Post) {
  return (
    post.metadata.image ||
    `/og/simple?title=${encodeURIComponent(post.metadata.title)}`
  );
}
