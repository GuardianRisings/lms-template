import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconBadge from "./icon-badge";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/format";
import CourseProgress from "./course-progress";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:scale-105 hover:shadow-sm transition overflow-hidden border rounded-lg h-full bg-white">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col  p-3">
          <div className="text-lg md:text-base font-semibold group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="flex items-center justify-between ">
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-slate-500">
                <IconBadge icon={BookOpen} size="sm" />
              </div>
              <div>
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </div>
            </div>

            {progress !== null ? (
              <CourseProgress
                value={progress}
                size="sm"
                variant={progress === 100 ? "success" : "default"}
              />
            ) : (
              <div className="text-md md:text-sm font-medium text-slate-700">
                {price === 0 ? "Free" : formatPrice(price)}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
