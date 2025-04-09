"use client";
import dynamic from "next/dynamic";

export const CourseHeader = dynamic(
  () => import("@/components/course-header/CourseHeader").then(res => res.CourseHeader),
  { ssr: false }
);
