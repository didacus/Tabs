import React from 'react'
import styled from 'styled-components'
import TabList from './TabList'
import Tab from './Tab'

const TabComponent = () => {
	const Wrapper = styled.div`
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f6f6f6;
	`

	const tabData = [
		{
			value: '1',
			label: 'A',
		},
		{
			value: '2',
			label: 'B',
		},
		{
			value: '3',
			label: 'C',
		},
		{
			value: '4',
			label: 'D',
		},
		{
			value: '5',
			label: 'E',
		},
	]

	const _renderTabs = tabData => {
		return tabData.map((data, index) => {
			return (
				<Tab value={data.value} key={index}>
					{data.label}
				</Tab>
			)
		})
	}

	return (
		<Wrapper>
			<TabList
				defaultValue="1"
				onChange={value => {
					console.log('value', value)
				}}
			>
				{_renderTabs(tabData)}
			</TabList>
		</Wrapper>
	)
}

export default TabComponent
