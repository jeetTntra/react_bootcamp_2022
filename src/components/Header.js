import {Layout} from "antd";
import styled from "styled-components";
import tw from "twin.macro";

const StyledHeader = styled(Layout.Header)`
  && {
    &.ant-layout-header {
      padding: 0 1rem;
      height: 4rem;
      align-items: center;
      background-color: orangered;
      gap: 1rem;
    }
    display: flex;
  }
`

const Title = styled.h1`
  ${tw`
    text-white
    bottom-0
    font-bold
    text-2xl
    font-sans
    flex
    items-center
    `}
`;

const Header = () => {
    return (
        <StyledHeader>
            <Title>Pokemon App</Title>
        </StyledHeader>
    );
}

export default Header;