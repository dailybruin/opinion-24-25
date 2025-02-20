import styled from "styled-components";
import NavBar from "./Nav";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: red;
`

const SlideOne = ()  => {

  return  (
      <>
      <NavBar/>
      <Container>Slide 1</Container>
    </>
  );
}

export default SlideOne;
