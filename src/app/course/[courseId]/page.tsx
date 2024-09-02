'use client'
import { useEffect, useState } from 'react';

import courses from '@/app/data/course';
;
import ChapterList from '@/components/ChapterList';
import VideoPlayer from '@/components/VideoPlayer';
import Quiz from '@/components/Quiz';
import { useRouter } from 'next/navigation';
import { useAuth, useClerk, useUser } from '@clerk/nextjs';



interface Chapter {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  quizzes: any[]; // Adjust the type as per your quiz structure
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const courseId = params.courseId;
  const course = courses.find((course) => course.id === courseId);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(course?.chapters[0] || null);
  const [chapterIndex, setChapterIndex] = useState<number>(0);
  

  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  
  // Redirect to sign-in page if not authenticated
  if (isLoaded && !isSignedIn) {
    router.push('/sign-in');
    return null; // You can also show a loading spinner or message here
  }

  const handleChapterSelect = (chapter: Chapter, index: number) => {
    setSelectedChapter(chapter);
    setChapterIndex(index);
  };

  const handleNext = () => {
    if (chapterIndex < (course?.chapters.length || 0) - 1) {
      handleChapterSelect(course!.chapters[chapterIndex + 1], chapterIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (chapterIndex > 0) {
      handleChapterSelect(course!.chapters[chapterIndex - 1], chapterIndex - 1);
    }
  };

  if (!course) return <p>Course not found</p>;
  if (!selectedChapter) return <p>Chapter not found</p>;

  return (
    <div>

      <div className="container mx-auto px-4 py-8 flex">
        <ChapterList chapters={course.chapters} onChapterSelect={handleChapterSelect} />
        <div className="w-3/4 p-4">
        <p>{course.title}</p>
          <h1 className="text-3xl font-bold mb-4">{selectedChapter.title}</h1>
          <VideoPlayer videoUrl={selectedChapter.videoUrl}  />
          <div className="mt-4">
            
            <p className="text-gray-800 mt-2">{selectedChapter.description}</p>
          </div>
          <Quiz questions={selectedChapter.quizzes} />
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={chapterIndex === 0}
              className="bg-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={chapterIndex === (course.chapters.length - 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
