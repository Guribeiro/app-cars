import styled from 'styled-components/native';
import Spacer from '@shared/components/Spacer';

const modalColorsVariation = {
  cancel: '#ff595e',
  confirm: '#1B1B1D',
};

export const Container = styled.View`
  align-items: center;
  padding: 0 ${({ theme }) => theme.screen.rem(1.6)}px 0;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.screen.rem(1)}px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palett.colors.secondary_opacity_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1.4)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
  text-align: center;
`;

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextEmphasized = styled(Text)`
  color: ${({ theme }) => theme.palett.colors.orange};
`;

interface ButtonProps {
  type: 'confirm' | 'cancel';
}

const Button = styled.TouchableOpacity<ButtonProps>`
  width: 45%;
  padding: ${({ theme }) => theme.screen.rem(0.6)}px;
  align-items: center;
  border-radius: ${({ theme }) => theme.screen.rem(0.4)}px;
  background-color: ${({ type }) => modalColorsVariation[type] || 'confirm'};
`;

const ButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  color: ${({ theme }) => theme.palett.colors.white};
`;

interface ModalConfirmationProps {
  onClose: () => void;
  onPress: () => void;
}

const ModalConfirmation = ({
  onClose,
  onPress,
}: ModalConfirmationProps): JSX.Element => {
  return (
    <Container>
      <Content>
        <Text>Deseja mesmo excluir esse carro ?</Text>
        <Spacer size={32} />
        <Row>
          <Button onPress={onClose} type="cancel">
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Spacer horizontal size={16} />
          <Button
            onPress={() => {
              onPress();
              onClose();
            }}
            type="confirm"
          >
            <ButtonText>Sim</ButtonText>
          </Button>
        </Row>
      </Content>
    </Container>
  );
};

export default ModalConfirmation;
