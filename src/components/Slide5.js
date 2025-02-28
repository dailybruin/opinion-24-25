import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FBE5B6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
`;

const LeftColumn = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Baskerville', serif;
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 3.5rem;
    color: #547966;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const BodyText = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: black;
`;

const RightColumn = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PlaceholderImage = styled.div`
    width: 90%;
    height: 80%;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #547966;
    border: 4px solid #547966;
`;

export default function Slide5() {
    return (
        <Container>
            <LeftColumn>
                <Title>E-IDENTITY</Title>
                <BodyText>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Per tortor duis sociosqu interdum pellentesque turpis.
                </BodyText>
            </LeftColumn>
            <RightColumn>
                <PlaceholderImage>
                    Image Placeholder
                </PlaceholderImage>
            </RightColumn>
        </Container>
    );
}
