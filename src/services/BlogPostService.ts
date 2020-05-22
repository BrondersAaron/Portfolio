import events from '@/data/events.json'
import {BlogPost} from "@/types/BlogPost";
export default class BlogPostService {

    public static getAllBlogPosts(): BlogPost[] {
        return events;
    }

    public static getBlogPost(id: number): BlogPost {
        return events[id];
    }
}