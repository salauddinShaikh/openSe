interface CardListProps {
  fetchCourses: () => void;
}

const CardList = ({ fetchCourses }: CardListProps) => {
  return <div data-testid="card-name">Name</div>;
};
export default CardList;
