import { useEffect, useState } from "react";

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
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const courses = fetchCourses();
    setCourses(courses);
  }, [fetchCourses]);

  return courses.map((course, index) => {
    return <Card course={course} key={index} />;
  });
};

export default CardList;

const Card = ({ course }: { course: Course }) => {
  return (
    <div data-testid="card">
      <div data-testid="card-name">{course.name}</div>
      <div data-testid="card-description">{course.description}</div>
    </div>
  );
};
