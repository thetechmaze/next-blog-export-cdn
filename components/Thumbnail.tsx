"use client";

import { IPost, posts } from "@/posts";
import { usePathname } from "next/navigation";
import CustomImage from "./CustomImage";

export default function Thumbnail() {
  const pathname = usePathname().split("/")[2];
  const post = posts.find((p: IPost) => p.slug === pathname);
  return (
    <div className="h-[250px] md:h-[500px] mb-10 overflow-hidden rounded-lg relative">
      <CustomImage srcStr={post?.thumbnail || "/images/hero.png"} altStr="" />
    </div>
  );
}
