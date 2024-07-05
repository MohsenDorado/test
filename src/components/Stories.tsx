import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Stories = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

//   const stories = await prisma.story.findMany({
//     where: {
//       expiresAt: {
//         gt: new Date(),
//       },
//       OR: [
//         {
//           user: {
//             followers: {
//               some: {
//                 followerId: currentUserId,
//               },
//             },
//           },
//         },
//         {
//           userId: currentUserId,
//         },
//       ],
//     },
//     include: {
//       user: true,
//     },
//   });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <Image src="/comment.png" alt="" width={80} height={80} className="w-20 h-20 ring-2 rounded-full"/>
        {/* <StoryList stories={stories} userId={currentUserId}/> */}
      </div>
    </div>
  );
};

export default Stories;