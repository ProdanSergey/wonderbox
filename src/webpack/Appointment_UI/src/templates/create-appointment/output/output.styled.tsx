import styled from "styled-components";
import { ButtonStyles, StyledButton as Button } from "../../../components/button.styled";

export const StyledWrapper = styled.output`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-right: 6px;
`;

export const StyledCopiedBadge = styled.span`
  ${ButtonStyles};
  margin-right: 6px;
  background-color: deepskyblue;
`;

export const StyledUriText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;