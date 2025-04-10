"use client";
import dynamic from "next/dynamic";
import { CourseHeaderLoading } from "./CourseHeaderLoading";

export const CourseHeader = dynamic(
  () => import("@/components/course-header/CourseHeader").then((res) => res.CourseHeader),
  { ssr: false, loading: CourseHeaderLoading }
);
