import styled from 'styled-components/native';

interface RowProps {
  justify?: 'center' | 'space-between' | 'space-evenly' | 'space-around';
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'center'};
`;

export default Row;
