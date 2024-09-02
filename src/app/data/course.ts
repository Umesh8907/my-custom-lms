const courses = [
  {
    id: 'course1',
    title: 'Introduction to Programming',
    description: 'A foundational course on programming concepts.',
    thumbnail: 'https://dummyimage.com/850x650/339966/fff',
    chapters: [
      {
        id: 'chapter1',
        title: 'Chapter 1: Introduction to Programming',
        description: 'An introduction to programming concepts and principles.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is programming?',
            options: ['Writing code', 'Compiling code', 'Executing code', 'Debugging code'],
            answer: 'Writing code',
          },
        ],
      },
      {
        id: 'chapter2',
        title: 'Chapter 2: Variables and Data Types',
        description: 'Learn about variables and different data types.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jp',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is a data type?',
            options: ['Variable', 'String', 'Function', 'Loop'],
            answer: 'String',
          },
        ],
      },
      {
        id: 'chapter3',
        title: 'Chapter 3: Control Structures',
        description: 'Understand how to control the flow of a program using loops and conditionals.',
        thumbnail: 'https://example.com/chapter3.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is a loop?',
            options: ['if', 'while', 'else', 'function'],
            answer: 'while',
          },
        ],
      },
      {
        id: 'chapter4',
        title: 'Chapter 4: Functions',
        description: 'Learn how to create and use functions in programming.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jp',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is a function?',
            options: ['A block of code', 'A variable', 'A data type', 'An operator'],
            answer: 'A block of code',
          },
        ],
      },
      {
        id: 'chapter5',
        title: 'Chapter 5: Arrays and Lists',
        description: 'Discover how to store and manipulate collections of data.',
        thumbnail: 'https://example.com/chapter5.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is an array?',
            options: ['A collection of variables', 'A loop', 'A function', 'A data type'],
            answer: 'A collection of variables',
          },
        ],
      },
      {
        id: 'chapter6',
        title: 'Chapter 6: Object-Oriented Programming',
        description: 'Dive into object-oriented programming concepts.',
        thumbnail: 'https://example.com/chapter6.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is an object?',
            options: ['A function', 'A variable', 'A class instance', 'A loop'],
            answer: 'A class instance',
          },
        ],
      },
      {
        id: 'chapter7',
        title: 'Chapter 7: Error Handling',
        description: 'Learn how to manage and handle errors in your programs.',
        thumbnail: 'https://example.com/chapter7.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        quizzes: [
          {
            question: 'What is the purpose of error handling?',
            options: ['To prevent errors', 'To write better code', 'To manage errors gracefully', 'To optimize code'],
            answer: 'To manage errors gracefully',
          },
        ],
      },
      {
        id: 'chapter8',
        title: 'Chapter 8: Advanced Topics',
        description: 'Explore advanced programming topics and concepts.',
        thumbnail: 'https://example.com/chapter8.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is an advanced programming concept?',
            options: ['Variables', 'Control structures', 'Machine learning', 'Functions'],
            answer: 'Machine learning',
          },
        ],
      },
    ],
  },
  {
    id: 'course1',
    title: 'Introduction to Programming',
    description: 'A foundational course on programming concepts.',
    thumbnail: 'https://dummyimage.com/850x650/339966/fff',
    chapters: [
      {
        id: 'chapter1',
        title: 'Chapter 1: Introduction to Programming',
        description: 'An introduction to programming concepts and principles.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is programming?',
            options: ['Writing code', 'Compiling code', 'Executing code', 'Debugging code'],
            answer: 'Writing code',
          },
        ],
      },
      {
        id: 'chapter2',
        title: 'Chapter 2: Variables and Data Types',
        description: 'Learn about variables and different data types.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jp',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is a data type?',
            options: ['Variable', 'String', 'Function', 'Loop'],
            answer: 'String',
          },
        ],
      },
      {
        id: 'chapter3',
        title: 'Chapter 3: Control Structures',
        description: 'Understand how to control the flow of a program using loops and conditionals.',
        thumbnail: 'https://example.com/chapter3.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is a loop?',
            options: ['if', 'while', 'else', 'function'],
            answer: 'while',
          },
        ],
      },
      {
        id: 'chapter4',
        title: 'Chapter 4: Functions',
        description: 'Learn how to create and use functions in programming.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jp',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is a function?',
            options: ['A block of code', 'A variable', 'A data type', 'An operator'],
            answer: 'A block of code',
          },
        ],
      },
      {
        id: 'chapter5',
        title: 'Chapter 5: Arrays and Lists',
        description: 'Discover how to store and manipulate collections of data.',
        thumbnail: 'https://example.com/chapter5.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is an array?',
            options: ['A collection of variables', 'A loop', 'A function', 'A data type'],
            answer: 'A collection of variables',
          },
        ],
      },
      {
        id: 'chapter6',
        title: 'Chapter 6: Object-Oriented Programming',
        description: 'Dive into object-oriented programming concepts.',
        thumbnail: 'https://example.com/chapter6.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is an object?',
            options: ['A function', 'A variable', 'A class instance', 'A loop'],
            answer: 'A class instance',
          },
        ],
      },
      {
        id: 'chapter7',
        title: 'Chapter 7: Error Handling',
        description: 'Learn how to manage and handle errors in your programs.',
        thumbnail: 'https://example.com/chapter7.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        quizzes: [
          {
            question: 'What is the purpose of error handling?',
            options: ['To prevent errors', 'To write better code', 'To manage errors gracefully', 'To optimize code'],
            answer: 'To manage errors gracefully',
          },
        ],
      },
      {
        id: 'chapter8',
        title: 'Chapter 8: Advanced Topics',
        description: 'Explore advanced programming topics and concepts.',
        thumbnail: 'https://example.com/chapter8.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is an advanced programming concept?',
            options: ['Variables', 'Control structures', 'Machine learning', 'Functions'],
            answer: 'Machine learning',
          },
        ],
      },
    ],
  },
  {
    id: 'course3',
    title: 'Introduction to Programming',
    description: 'A foundational course on programming concepts.',
    thumbnail: 'https://dummyimage.com/850x650/339966/fff',
    chapters: [
      {
        id: 'chapter1',
        title: 'Chapter 1: Introduction to Programming',
        description: 'An introduction to programming concepts and principles.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        quizzes: [
          {
            question: 'What is programming?',
            options: ['Writing code', 'Compiling code', 'Executing code', 'Debugging code'],
            answer: 'Writing code',
          },
        ],
      },
      {
        id: 'chapter2',
        title: 'Chapter 2: Variables and Data Types',
        description: 'Learn about variables and different data types.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jp',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is a data type?',
            options: ['Variable', 'String', 'Function', 'Loop'],
            answer: 'String',
          },
        ],
      },
      {
        id: 'chapter3',
        title: 'Chapter 3: Control Structures',
        description: 'Understand how to control the flow of a program using loops and conditionals.',
        thumbnail: 'https://example.com/chapter3.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is a loop?',
            options: ['if', 'while', 'else', 'function'],
            answer: 'while',
          },
        ],
      },
      {
        id: 'chapter4',
        title: 'Chapter 4: Functions',
        description: 'Learn how to create and use functions in programming.',
        thumbnail: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jp',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is a function?',
            options: ['A block of code', 'A variable', 'A data type', 'An operator'],
            answer: 'A block of code',
          },
        ],
      },
      {
        id: 'chapter5',
        title: 'Chapter 5: Arrays and Lists',
        description: 'Discover how to store and manipulate collections of data.',
        thumbnail: 'https://example.com/chapter5.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is an array?',
            options: ['A collection of variables', 'A loop', 'A function', 'A data type'],
            answer: 'A collection of variables',
          },
        ],
      },
      {
        id: 'chapter6',
        title: 'Chapter 6: Object-Oriented Programming',
        description: 'Dive into object-oriented programming concepts.',
        thumbnail: 'https://example.com/chapter6.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'What is an object?',
            options: ['A function', 'A variable', 'A class instance', 'A loop'],
            answer: 'A class instance',
          },
        ],
      },
      {
        id: 'chapter7',
        title: 'Chapter 7: Error Handling',
        description: 'Learn how to manage and handle errors in your programs.',
        thumbnail: 'https://example.com/chapter7.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        quizzes: [
          {
            question: 'What is the purpose of error handling?',
            options: ['To prevent errors', 'To write better code', 'To manage errors gracefully', 'To optimize code'],
            answer: 'To manage errors gracefully',
          },
        ],
      },
      {
        id: 'chapter8',
        title: 'Chapter 8: Advanced Topics',
        description: 'Explore advanced programming topics and concepts.',
        thumbnail: 'https://example.com/chapter8.jpg',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        quizzes: [
          {
            question: 'Which of the following is an advanced programming concept?',
            options: ['Variables', 'Control structures', 'Machine learning', 'Functions'],
            answer: 'Machine learning',
          },
        ],
      },
    ],
  },
]

export default courses
