import React from 'react';
import { css, keyframes } from '@emotion/react';
import { MAIN_BLUE } from '../../../domain/services/constants/constants';

type SpinnerProps = {
  visible: boolean;
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = ({ visible }: SpinnerProps) => {
    const spinnerStyle = css`
      display: ${visible ? 'block' : 'none'};
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left-color: ${MAIN_BLUE};
      border-radius: 50%;
      width: 24px;
      height: 24px;
      animation: ${spin} 1s linear infinite;
      margin-right: 20px;
    `;

  return <div css={spinnerStyle} />;
};

export default Spinner;
