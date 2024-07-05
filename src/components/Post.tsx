import Image from "next/image";

import { Suspense } from "react";

import { auth } from "@clerk/nextjs/server";
import Comments from "./Comments";

// type FeedPostType = PostType & { user: User } & {
//   likes: [{ userId: string }];
// } & {
//   _count: { comments: number };
// };

const Post = () => {
  const { userId } = auth();
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">username
          </span>
        </div>
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
       
          <div className="w-full min-h-96 relative">
            <Image
              src={"login.png"}
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        
        <p>desc</p>
      </div>
      {/* INTERACTION */}
      <Suspense fallback="Loading...">
        
      </Suspense>
      <Suspense fallback="Loading...">
        <Comments/>
      </Suspense>
    </div>
  );
};

export default Post;