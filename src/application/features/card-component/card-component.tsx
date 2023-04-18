import { css } from '@emotion/react';

interface CardProps {
  width: string;
  height: string;
  children: React.ReactNode;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ width, height, children, imageUrl }) => {
  return (
    <div css={cardStyle(width, height)}>
      {imageUrl && <img css={imageStyle} src={imageUrl} alt={imageUrl} />}
      <div css={contentStyle}>{children}</div>
    </div>
  );
};

const cardStyle = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > img {
    margin-top: -100px;
  }
`;

const contentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const imageStyle = css`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export default Card;
