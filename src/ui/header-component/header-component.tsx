import { css } from '@emotion/react';

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
`;

type HeaderProps = {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header css={headerStyle}>{children}</header>;
};

export default Header;
