import {useEffect, useState} from "react";

interface Course {
    name: string;
    category: string;
    description: string;
    rating: number;
}

interface CardListProps {
    fetchCourses: () => Course[];
}

const fetchCourses = () => {
    return fetch('http://localhost:3000/courses')
}

const CardList = ({}: CardListProps) => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function applesauce() {
            const response = await fetchCourses();
            const courses = await response.json()
            setCourses(courses);
        }
        applesauce()
    }, [fetchCourses]);

    return courses.map((course, index) => {
        return <Card course={course} key={index}/>;
    });
};

export default CardList;

const Card = ({course}: { course: Course }) => {
    return (
        <div data-testid="card">
            <div data-testid="card-name">{course.name}</div>
            <div data-testid="card-description">{course.description}</div>
        </div>
    );
};
