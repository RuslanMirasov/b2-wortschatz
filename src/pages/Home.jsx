import Section from '../components/Section/Section';
import BooksCollection from '../components/BooksCollection/BooksCollection';
import books from '../api/books';

const Home = () => {
  return (
    <Section title="Wählen Sie ein Buch">
      <BooksCollection books={books} />
    </Section>
  );
};

export default Home;
