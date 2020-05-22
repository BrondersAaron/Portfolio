export type BlogPostParagraph = { title: string; content: string };
export type BlogPost = {
    title: string;
    image: string;
    date: string;
    short: string;
    content: BlogPostParagraph[];
}