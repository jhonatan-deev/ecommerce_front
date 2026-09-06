import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const Slide = styled.div`
  width: 100%;
  aspect-ratio: 1200 / 400;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 42px;
  height: 42px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.45);
  color: ${({ theme }) => theme.colors.textOnPrimary};

  font-size: 32px;
  line-height: 1;

  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.65);
  }

  &.previous {
    left: ${({ theme }) => theme.spacing.md};
  }

  &.next {
    right: ${({ theme }) => theme.spacing.md};
  }
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.md};
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Indicator = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;

  padding: 0;

  border: none;
  border-radius: 50%;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.textOnPrimary : 'rgba(255, 255, 255, 0.55)'};

  cursor: pointer;
`;
