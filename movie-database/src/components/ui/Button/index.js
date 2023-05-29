import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  margin-bottom: 1rem;
  cursor: pointer;

  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  ${(props) =>
    css`
      ${props.theme.sizes[props.size] || props.theme.sizes.md}
    `}

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `};
`;

export default Button;
