"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Users, Award, PlayCircle } from 'lucide-react';
import { sampleCourses } from '@/lib/sample-data';
export async function generateStaticParams() {
  const courses = await fetch("https://your-api.com/courses").then((res) =>
    res.json()
  );

  return courses.map((course: { slug: string }) => ({
    slug: course.slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  return <div>Course Page for {params.slug}</div>;
}
import { toast } from 'sonner';
import { Course } from '@/lib/types';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const foundCourse = sampleCourses.find(c => c.slug === params.slug);
    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [params.slug]);

  const handleEnroll = () => {
    // Check if user is authenticated
    const isAuthenticated = false; // Replace with actual auth check
    
    if (!isAuthenticated) {
      toast.error('Please sign in to enroll in this course');
      router.push('/signin');
      return;
    }

    // If authenticated, redirect to checkout
    router.push(`/checkout/${course?.slug}`);
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
            <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <img
                src={course.thumbnailUrl}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Course Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm text-muted-foreground">20 Hours</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <Users className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm text-muted-foreground">500+ Students</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <Award className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm text-muted-foreground">Certificate</span>
              </div>
            </div>

            {/* Course Description */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
              <p className="text-muted-foreground mb-6">{course.description}</p>
              
              <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <PlayCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Understanding core concepts and principles</span>
                </li>
                <li className="flex items-center">
                  <PlayCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Hands-on practical exercises and projects</span>
                </li>
                <li className="flex items-center">
                  <PlayCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Real-world application and case studies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enrollment Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8">
              <div className="text-3xl font-bold mb-6">${course.price}</div>
              <Button className="w-full mb-4" size="lg" onClick={handleEnroll}>
                Enroll Now
              </Button>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>✓ Lifetime access</p>
                <p>✓ Certificate of completion</p>
                <p>✓ 30-day money-back guarantee</p>
                <p>✓ Access on mobile and desktop</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}