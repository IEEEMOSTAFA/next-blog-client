// types/post.types.ts

export enum PostStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED"
}

export interface BlogPost {
  id: string;                    // UUID
  title: string;                 // Required
  content: string | null;        // Nullable in schema
  thumbnail?: string | null;     // Optional (schema তে নেই, কিন্তু UI তে আছে)
  tags: string[];                // Required array (not optional)
  views: number;                 // Required, default 0
  isFeatured: boolean;           // Required, default false (not optional)
  status: PostStatus;            // Required, default PUBLISHED
  authorId: string;              // Required
  created: Date | string;        // DateTime
  updateAt: Date | string;       // DateTime (updatedAt)
  _count?: {                     // Optional from Prisma include
    comments: number;
  };
}

// With Author Info
export interface Author {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role?: string;
}

export interface BlogPostWithAuthor extends BlogPost {
  author: Author;
}

// API Response
export interface PostsResponse {
  data: BlogPost[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}