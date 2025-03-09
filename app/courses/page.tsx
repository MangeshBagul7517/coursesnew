import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  instructor: string;
}

// This will be replaced with actual data from Supabase
const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Learn full-stack web development from scratch with practical projects.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    instructor: "John Doe"
  },
  {
    id: "2",
    title: "Advanced JavaScript Mastery",
    description: "Master modern JavaScript concepts and build real-world applications.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=600",
    instructor: "Jane Smith"
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of user interface and experience design.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    instructor: "Sarah Johnson"
  }
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Available Courses</h1>
        <p className="text-lg text-gray-600">
          Browse our selection of expert-led courses to advance your career
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">
                  Instructor: {course.instructor}
                </span>
                <span className="text-lg font-bold">${course.price}</span>
              </div>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href={`/courses/${course.id}`}>View Course</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}