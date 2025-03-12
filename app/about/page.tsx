import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award, Target } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Quantora </h1>
            <p className="text-xl text-muted-foreground">
              Empowering individuals with knowledge and skills for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="grid gap-8">
              <div className="flex items-start">
                <Target className="h-8 w-8 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Education for All</h3>
                  <p className="text-muted-foreground">
                    We believe that quality education should be accessible to everyone. Our platform provides affordable, 
                    professional-grade courses that help individuals achieve their learning goals and advance their careers.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-8 w-8 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community-Driven Learning</h3>
                  <p className="text-muted-foreground">
                    We foster a supportive learning environment where students can connect, collaborate, and learn from 
                    each other while receiving guidance from industry experts.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-8 w-8 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Excellence</h3>
                  <p className="text-muted-foreground">
                    Our courses are designed and taught by industry professionals who bring real-world experience and 
                    expertise to help you master practical skills that matter in today's job market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-muted-foreground">Head of Education</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
              <p className="text-muted-foreground">Technical Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your learning journey with Quantora  today and unlock your potential.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/courses">
                <Button size="lg">View Courses</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}