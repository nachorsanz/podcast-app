import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner-component/spinner-component';
import {
  MAIN_BLUE,
  MAIN_WHITE,
} from '../../../domain/services/constants/constants';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${MAIN_WHITE};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  z-index: 1;

  & > h1 {
    margin: 0;
    padding: 0 20px;
    color: ${MAIN_BLUE};
  }
`;

interface HeaderProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, isLoading = false }) => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => navigate('/')}
      css={headerStyle}
      data-testid="header-component"
    >
      <h1>{children}</h1>
      <Spinner visible={isLoading} />
    </header>
  );
};

export default Header;
