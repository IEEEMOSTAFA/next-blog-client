import BlogCard from "@/components/modules/authentication/BlogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";

export default async function Home() {
  // const session =  await authClient.getSession();
  // console.log(session);
  //  const {data} = await userService.getSession();
  //   console.log(data)
  // const {data} = await blogService.getBlogPosts();
  // console.log(data);

  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false
    },
    {
      cache: "no-store",
    },
  );
  console.log(data);

  return (
    <div>
      {/* <Button variant="outline">Click Here</Button>
      
      */}

      {
        data?.data?.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post}></BlogCard>
        ))
      }

    </div>
  );
}
