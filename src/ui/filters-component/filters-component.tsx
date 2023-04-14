import { ChangeEvent } from "react";
import { css } from "@emotion/react";

interface FiltersProps {
  total: number;
  filter: string;
  handleFilter: (filter: string) => void;
}

const Filters = ({ total, filter, handleFilter }: FiltersProps) => {


  return (
    <div css={filtersContainerStyles}>
      <div css={filtersTopRowStyles}>
        <span>{total} </span>
        <div css={{ display: "flex", gap: 10 }}>
          <input
            type="text"
            value={filter}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFilter(e.target.value)
            }
            css={filterInputStyles}
            placeholder="Buscar por título o autor"
          />
        </div>
      </div>
    </div>
  );
};
const filtersContainerStyles = css`
display: flex;
flex-direction: column;
background-color: #f5f5f5;
padding: 20px;
border-radius: 5px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const filtersTopRowStyles = css`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`;

const filterInputStyles = css`
border: 1px solid #cccccc;
border-radius: 3px;
padding: 5px 10px;
font-size: 16px;
flex: 1;
`;
export default Filters;
