import Link from 'next/link'

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
    thumbnail: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{course.title}</h2>
      <p className="text-gray-700 mt-2">{course.description}</p>
      <Link href={`/course/${course.id}`} className="text-blue-500 mt-4 block">
        View Course
      </Link>
    </div>
  )
}
