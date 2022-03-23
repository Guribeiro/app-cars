import { Container, Label, Bar } from './styles';

interface EditScreenLabelProps {
  children: string;
}

const EditScreenLabel = ({ children }: EditScreenLabelProps): JSX.Element => (
  <Container>
    <Label>{children}</Label>
    <Bar />
  </Container>
);

export default EditScreenLabel;
