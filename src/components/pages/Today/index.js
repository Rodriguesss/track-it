import Title from "../../atomics/Title";
import Container from "../../generics/Container";
import Header from "../../generics/Header";
import Navbar from "../../generics/Navbar";

export default function Today() {
  return (
    <>
      <Header />
      <Container>
        <Title>{Date()}</Title>
      </Container>
      <Navbar />
    </>
  )
}