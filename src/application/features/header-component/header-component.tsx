import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  z-index: 1;

  & > h1 {
    margin: 0;
    padding: 0 20px;
    color: #007aff;
  }
`;

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => navigate('/')}
      css={headerStyle}
      data-testid="header-component"
    >
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
