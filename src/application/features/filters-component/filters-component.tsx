import { ChangeEvent } from 'react';
import { css } from '@emotion/react';
const filtersContainerStyle = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  padding: 30px;
`;

const filtersTopRowStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  margin-right: 90px;
`;

const filterInputStyle = css`
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 5px 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
  font-size: 16px;
  flex: 1;

  &:focus {
    outline: none;
    border: 1px solid #007aff;
  }
`;
interface FiltersProps {
  total: number;
  filter: string;
  handleFilter: (filter: string) => void;
}

const Filters = ({ total, filter, handleFilter }: FiltersProps) => {
  return (
    <div css={filtersContainerStyle} data-testid="filters-component">
      <div css={filtersTopRowStyle}>
        <span
          css={{
            fontSize: 16,
            fontWeight: 600,
            color: '#fff',
            width: '40px',
            height: '20px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#007aff',
            borderRadius: '5px',
          }}
        >
          {total}
        </span>
        <div css={{ display: 'flex', gap: 10 }}>
          <input
            type="text"
            value={filter}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFilter(e.target.value)
            }
            css={filterInputStyle}
            placeholder="Filtrar podcasts..."
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
