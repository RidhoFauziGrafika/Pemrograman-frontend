import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  margin: 1rem 0;
  color: #fff;
  cursor: pointer;

  /* props variant */
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.teal};

  ${(props) =>
    css`
      ${props.theme.sizes[props.size] || props.theme.sizes.md}
    `}

  /* props  full */
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
