import PropTypes from "prop-types";
import styled from 'styled-components'

const CustomListItem = styled.li`
  color: black;
  font-weight: normal;
`

export const TodoItem = (props) => {
    return (
        <CustomListItem>{props.value}</CustomListItem>
    )
}

TodoItem.propTypes = {
    value: PropTypes.string
}