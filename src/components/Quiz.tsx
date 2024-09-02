import React, { useState } from 'react'

interface QuizProps {
  questions: {
    question: string
    options: string[]
    answer: string
  }[]
}

export default function Quiz({ questions }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const handleOptionSelect = (questionIndex: number, option: string) => {
    const updatedAnswers = [...selectedAnswers]
    updatedAnswers[questionIndex] = option
    setSelectedAnswers(updatedAnswers)
  }

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Quiz</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="mb-4">
          <p className="text-lg font-semibold">{q.question}</p>
          <ul className="list-disc ml-6 mt-2">
            {q.options.map((option, i) => (
              <li
                key={i}
                className={`text-gray-700 cursor-pointer ${
                  selectedAnswers[idx] === option ? 'font-bold' : ''
                }`}
                onClick={() => handleOptionSelect(idx, option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
