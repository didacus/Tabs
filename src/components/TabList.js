import React, { Component } from 'react'
import styled from 'styled-components'

const TabListWrapper = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
`

export default class TabList extends Component {
	constructor(props) {
		super()

		this.state = {
			value: props.defaultValue,
		}
	}

	select(value) {
		this.setState({ value }, () => {
			this.props.onChange(this.state.value)
		})
	}

	render() {
		const children = React.Children.map(this.props.children, child =>
			React.cloneElement(child, {
				isSelected: child.props.value === this.state.value,
				onClick: () => this.select(child.props.value),
			}),
		)

		return <TabListWrapper>{children}</TabListWrapper>
	}
}
