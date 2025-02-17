import { auth } from "@clerk/nextjs/server";

const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth();

  let posts:any[] =[];

  // if (username) {
  //   posts = await prisma.post.findMany({
  //     where: {
  //       user: {
  //         username: username,
  //       },
  //     },
  //     include: {
  //       user: true,
  //       likes: {
  //         select: {
  //           userId: true,
  //         },
  //       },
  //       _count: {
  //         select: {
  //           comments: true,
  //         },
  //       },
  //     },
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });
  // }

  // if (!username && userId) {
  //   const following = await prisma.follower.findMany({
  //     where: {
  //       followerId: userId,
  //     },
  //     select: {
  //       followingId: true,
  //     },
  //   });

  //   const followingIds = following.map((f) => f.followingId);
  //   const ids = [userId,...followingIds]

  //   posts = await prisma.post.findMany({
  //     where: {
  //       userId: {
  //         in: ids,
  //       },
  //     },
  //     include: {
  //       user: true,
  //       likes: {
  //         select: {
  //           userId: true,
  //         },
  //       },
  //       _count: {
  //         select: {
  //           comments: true,
  //         },
  //       },
  //     },
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });
  // }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
       No posts found!
    </div>
  );
};

export default Feed;