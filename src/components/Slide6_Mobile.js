import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #6A4C93;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Baskerville', serif;
    color: white;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

const BodyText = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`;

const PlaceholderImage = styled.div`
    width: 200px;
    height: 200px;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #6A4C93;
    border: 3px solid white;
`;

export default function Slide6_Mobile() {
    return (
        <Container>
            <Title>EXPEDITION</Title>
            <BodyText>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis.
            </BodyText>
            <PlaceholderImage>
                Image Placeholder
            </PlaceholderImage>
        </Container>
    );
}
