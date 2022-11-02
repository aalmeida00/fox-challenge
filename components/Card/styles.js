import styled from 'styled-components';

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
  background-color: #fafafa;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;
export const BodyWrapper = styled.div``;
export const FooterWrapper = styled.footer``;
