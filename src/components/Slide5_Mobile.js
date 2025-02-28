import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FBE5B6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 2.5rem;
    color: #547966;
    text-transform: uppercase;
    margin: 1rem 0;
    text-align: center;
`;

const BodyText = styled.p`
    font-family: 'Baskerville', serif;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
`;

const PlaceholderImage = styled.div`
    width: 80%;
    height: 40%;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #547966;
    border: 3px solid #547966;
    margin-top: 1rem;
`;

export default function Slide5_Mobile() {
    return (
        <Container>
            <Title>E-IDENTITY</Title>
            <BodyText>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis.
            </BodyText>
            <PlaceholderImage>
                Image Placeholder
            </PlaceholderImage>
        </Container>
    );
}
