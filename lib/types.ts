export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  thumbnailUrl: string;
  previewVideoUrl?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CourseSection {
  id: string;
  courseId: string;
  title: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseContent {
  id: string;
  sectionId: string;
  title: string;
  contentType: string;
  contentUrl: string;
  orderIndex: number;
  isPreview: boolean;
  createdAt: string;
  updatedAt: string;
}