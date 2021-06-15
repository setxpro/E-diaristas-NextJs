import { experimentalStyled as styled } from "@material-ui/core/styles";

export const SafeEnviromentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};

  text-align: right;
  font-size: 0.9rem;

  padding: ${({ theme }) => theme.spacing(2)} 0;
`;
