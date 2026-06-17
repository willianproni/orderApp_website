import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary.main};
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      font-size: 32px;
      color: ${({ theme }) => theme.colors.gray[0]};
    }

    h2 {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray[0]};
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
