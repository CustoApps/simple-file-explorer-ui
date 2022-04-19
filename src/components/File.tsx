import React from 'react'
import { BiFileBlank } from 'react-icons/bi'

type IProps = {
	name: string
}

export const File: React.FC<IProps> = ({ name }) => {
	return (
		<div className={`flex items-center pl-3.5`}>
			<BiFileBlank />
			<span className={`ml-1.5`}>{name}</span>
		</div>
	)
}
