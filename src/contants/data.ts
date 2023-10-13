import { testimonial } from "../types/testimonial";

// dummy data for category chips in homepage
export const Data = [
  {
    id: "1",
    title: "Tech",
  },
  {
    id: "2",
    title: "Electrical",
  },
  {
    id: "3",
    title: "Painting",
  },
  {
    id: "4",
    title: "Boating",
  },
  {
    id: "5",
    title: "Self-defense",
  },
  {
    id: "6",
    title: "Boating",
  },
  {
    id: "7",
    title: "Self-defense",
  },
];

//dummy data for course tiles

export const courseData = [
  {
    id: "1",
    title: "Introduction to Programming",
    price: 4.67,
    recommendations: 32,
    author: "Al-shevidat",
  },
  {
    id: "2",
    title: "Web Development Fundamentals",
    price: 9.99,
    recommendations: 45,
    author: "John Doe",
  },
  {
    id: "3",
    title: "Data Science Essentials",
    price: 19.99,
    recommendations: 56,
    author: "Jane Smith",
  },
  {
    id: "4",
    title: "JavaScript Mastery",
    price: 14.95,
    recommendations: 28,
    author: "Chris Johnson",
  },
  {
    id: "5",
    title: "Mobile App Development",
    price: 7.5,
    recommendations: 38,
    author: "Amanda Brown",
  },
  {
    id: "6",
    title: "Machine Learning Basics",
    price: 12.99,
    recommendations: 64,
    author: "David Lee",
  },
  {
    id: "7",
    title: "Frontend Frameworks",
    price: 8.25,
    recommendations: 22,
    author: "Emily Wilson",
  },
  {
    id: "8",
    title: "Database Management",
    price: 6.99,
    recommendations: 50,
    author: "Michael Clark",
  },
  {
    id: "9",
    title: "Artificial Intelligence",
    price: 11.49,
    recommendations: 39,
    author: "Lisa Anderson",
  },
  {
    id: "10",
    title: "Software Engineering Principles",
    price: 3.99,
    recommendations: 19,
    author: "Sarah Taylor",
  },
];



export const curriculum = {
  sections: [
    {
      id: "section1",
      title: "Section 1",
      chapters: [
        {
          id: "1",
          title: "Chapter 1",
          type: "video",
        },
        {
          id: "2",
          title: "Chapter 2",
          type: "article",
        },
      ],
    },
    {
      id: "section2",
      title: "Section 2",
      chapters: [
        {
          id: "3",
          title: "Chapter 3",
          type: "video",
        },
        {
          id: "4",
          title: "Chapter 4",
          type: "video",
        },
      ],
    },
  ],
};

export const testimonials: testimonial[] = [
  {
    person: "ahmad",
    comment: "this was very good",
  },
  {
    person: "ali",
    comment: "this was very poor",
  },
  {
    person: "mahnoor",
    comment: "this was soo cool!",
  },
];