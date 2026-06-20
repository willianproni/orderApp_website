import styled from "styled-components";

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 128px;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[0]};
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 4px;
  margin-top: 24px;
  gap: 4px;

strong {
  font-weight: 500;
}

span {
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};
}

  & + button {
    margin-top: 24px;
  }
`;
