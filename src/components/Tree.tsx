import React from 'react'
import { File, Folder } from '../components'

type IProps = {
	data: IDir[]
}

export const Tree: React.FC<IProps> = ({ data }) => {
	return (
		<div className={`leading-6`}>
			<TreeRecursive data={data} />
		</div>
	)
}

const TreeRecursive: React.FC<{ data: IDir[] }> = ({ data }) => {
	return (
		<>
			{data.map((item) =>
				'folder' === item.type ? (
					<Folder name={item.name}>
						<TreeRecursive data={item.childrens || []} />
					</Folder>
				) : 'file' === item.type ? (
					<File name={item.name} />
				) : null
			)}
		</>
	)
}
