
import CourseCard from '@/components/CourseCard';
import courses from './data/course';

export default function HomePage() {
  return (
    <div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}