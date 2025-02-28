import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #6A4C93;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Baskerville', serif;
    color: white;
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const BodyText = styled.p`
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 2rem;
`;

const PlaceholderImage = styled.div`
    width: 300px;
    height: 300px;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #6A4C93;
    border: 5px solid white;
`;

export default function Slide6() {
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
