import React from 'react'
import styled from 'styled-components'

const Tab = ({ onClick, isSelected, children }) => {
	const TabWrapper = styled.li`
		width: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		margin: 1px;
		color: ${props => (isSelected ? `white` : `black`)};
		background-color: ${props => (isSelected ? `black` : `#C4C4C4`)};
		cursor: ${props => (isSelected ? 'default' : `pointer`)};
	`

	return <TabWrapper onClick={onClick}>{children}</TabWrapper>
}

export default Tab
