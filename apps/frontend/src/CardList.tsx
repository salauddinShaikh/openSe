import {useEffect, useState} from 'react'

interface Course {
  name: string;
  category: string;
  description: string;
  rating: number;
}

interface CardListProps {
  fetchCourses: () => Course[];
}

const CardList = ({ fetchCourses }: CardListProps) => {
  const [courses, setCourses] = useState<Course[]>()

  useEffect(() => {
    const courses = fetchCourses()
    setCourses(courses)
  }, [])

  return courses?.map(course => {
    return <div data-testid="card-name">{course.name}</div>;
  })
};

export default CardList;
