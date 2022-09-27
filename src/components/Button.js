import PropTypes from "prop-types";
import styled from 'styled-components'
import tw from "twin.macro";

const CustomButton = styled.a`
    ${tw `text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 rounded hover:cursor-pointer text-sm`}
`

export const Button = (props) => {
    return (
        <CustomButton type="text" onClick={props.onClick}>{props.placeholder}</CustomButton>
    )
}

Button.propTypes = {
    placeholder: PropTypes.string,
    onClick: PropTypes.func
}

