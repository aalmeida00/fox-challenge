import styled from 'styled-components';
import { md, sm, xxs, xxxs } from '../Styles/fonts';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 176px);
  gap: 8px;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 0 1 0%;
  overflow-y: auto;
`;

export const Section = styled.section`
  padding: 24px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;

  img {
    width: 28px;
    height: 28px;
  }
`;
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SymbolLabel = styled.h2`
  ${sm}
  margin-bottom:8px;
`;
export const SymbolValue = styled.span`
  ${md}
  margin-bottom:16px;
  span {
    color: #5d5d5d;
    font-weight: 700;
  }
`;
export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`;
export const VolumeLabel = styled.span`
  ${xxxs}
  margin-bottom:4px;
`;
export const VolumeValue = styled.span`
  ${xxs}
`;
