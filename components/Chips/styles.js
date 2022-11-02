import styled, { css } from 'styled-components';
import color from '../Styles/colors';
import { xxxs } from '../Styles/fonts';

export const Wrapper = styled.div`
  display: flex;
  ${({ variation }) => css`
    background-color: ${variation === 'positive'
      ? color.bg50positive
      : color.bg50negative};
    color: ${variation == 'positive'
      ? color.content800positive
      : color.content800negative};
  `}
  border-radius: 8px;
  padding: 4px 8px;
  `;


export const ChipsContent = styled.span`
  ${xxxs};
`