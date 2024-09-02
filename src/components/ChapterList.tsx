import React, { useState } from 'react'

interface Chapter {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
}

interface ChapterListProps {
  chapters: Chapter[]
  onChapterSelect: (chapter: Chapter, index: number) => void
}

export default function ChapterList({ chapters, onChapterSelect }: ChapterListProps) {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null)

  const handleChapterSelect = (chapter: Chapter, index: number) => {
    setSelectedChapterId(chapter.id)
    onChapterSelect(chapter, index)
  }

  return (
    <div className="w-1/4 p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-4 text-black">Chapters</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li
            key={chapter.id}
            className={`mb-2 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedChapterId === chapter.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-black hover:bg-gray-400'
            }`}
            onClick={() => handleChapterSelect(chapter, index)}
          >
            <div className="flex items-center">
              <span className="text-lg font-semibold">{chapter.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
