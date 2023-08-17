import {
    Container, DscrText, ProcessingBox, SmallTitle, TextBox
} from './styled'

export default function Processing(){
    return (
        <Container>
            <SmallTitle color='black'>🤖 Processing...</SmallTitle>
            <ProcessingBox></ProcessingBox>
            <TextBox>
                <DscrText fontsize={22}>Sit tight as we unleash a team of eager investor robots to dissect your pitch... Beep-boop... our supercomputing overlords began crunching numbers!</DscrText>
            </TextBox>
        </Container>
    );
}