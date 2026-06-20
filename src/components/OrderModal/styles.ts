import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.gray[0]};
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      background: transparent;
      border: none;
    }
  }

  .status {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: start;

  & + div {
    margin-top: 16px;
  }

  img {
    border-radius: 6px;
  }

  .quantity {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[700]};
    display: block;
    min-width: 20px;
    margin-left: 12px;
  }

  .details {
    margin-left: 4px;

    strong {
      display: block;
      margin-bottom: 4px;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[700]};
    }
  }
`;

export const Actions = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .secondary {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .primary {
    width: 50%;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.gray[0]};
    border: none;
    padding: 12px 24px;
    border-radius: 48px;
    font-weight: 500;
    font-size: 16px;
  }
`;
