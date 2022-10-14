import {Button, Layout} from "antd";
import styled from "styled-components";
import tw from "twin.macro";
import {useNavigate} from "react-router-dom";

const StyledHeader = styled(Layout.Header)`
  && {
    &.ant-layout-header {
      padding: 0 1rem;
      height: 4rem;
      align-items: center;
      background-color: black;
      gap: 1rem;
      position: sticky;
      top: 0;
      z-index: 1;
    }

    display: flex;
  }
`

const PlayGameButton = styled(Button)`
  && {
    &.ant-btn {
      background-color: #f3f3f3;
      border: 1px solid #ffffff;
      color: black;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      margin-left: auto;

      &:hover {
        background-color: #ffffff;
        border: 2px solid firebrick;
        cursor: pointer;
      }
    }
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

    const navigate = useNavigate();

    const handlePlayGame = () => {
        navigate("/play");
    }

    return (
        <StyledHeader>
            <Title>Pokemon App</Title>
            <PlayGameButton onClick={handlePlayGame}>Play Game</PlayGameButton>
        </StyledHeader>
    );
}

export default Header;