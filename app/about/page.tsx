export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About LearnHub</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg text-gray-600 mb-6">
            LearnHub is a premier online learning platform dedicated to providing high-quality educational content
            to learners worldwide. Our mission is to make professional education accessible, engaging, and effective.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe that education should be accessible to everyone, everywhere. Our platform connects passionate
            instructors with eager learners, creating a vibrant community of knowledge sharing and growth.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Sets Us Apart</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Expert-led courses from industry professionals</li>
            <li>Hands-on learning with practical projects</li>
            <li>Flexible learning schedule</li>
            <li>Lifetime access to course materials</li>
            <li>Active community support</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
          <p className="text-gray-600 mb-6">
            Quality, accessibility, and innovation are at the heart of everything we do. We continuously strive
            to improve our platform and content to provide the best learning experience for our students.
          </p>
        </div>
      </div>
    </div>
  );
}