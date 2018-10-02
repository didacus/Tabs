import React from 'react'
import styled from 'styled-components'

const TabWrapper = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 100px;
	margin: 1px;
	font-size: 3em;
	color: ${props => (props.isSelected ? `white` : `black`)};
	background-color: ${props => (props.isSelected ? `black` : `#C4C4C4`)};
	cursor: ${props => (props.isSelected ? 'default' : `pointer`)};
`

const Tab = ({ onClick, isSelected, children }) => {
	return <TabWrapper isSelected={isSelected} onClick={onClick}>{children}</TabWrapper>
}

export default Tab
