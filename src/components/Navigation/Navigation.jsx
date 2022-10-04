import { Link, Container, Header } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="movies">
            Movies
          </Link>
        </nav>
      </Header>
    </Container>
  );
};
