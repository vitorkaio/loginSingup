import styled from 'styled-components';
import { PrimaryColor, ErrorColor } from 'components/ui/colors/Colors.js';

export const InputDataCss = styled.input`
  padding: 0.8rem 0.5rem;
  border: 1px solid ${props => props.error ? ErrorColor : PrimaryColor};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  outline: none;

  width: ${props => props.width};

  &:focus {
    border-color: ${props => props.error ? ErrorColor : 'cornflowerblue'};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;
