import React, { useState } from 'react'
import { BiFolder, BiFolderOpen } from 'react-icons/bi'

type IProps = {
	name: string
	children: JSX.Element
}

export const Folder: React.FC<IProps> = ({ name, children }) => {
	const [isOpen, setOpen] = useState(false)

	const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault()
		setOpen((prev) => !prev)
	}

	return (
		<div className={`pl-3.5`}>
			<div className={`flex items-center`} onClick={handleToggle}>
				{isOpen ? <BiFolderOpen /> : <BiFolder />}
				<span className={`ml-1.5`}>{name}</span>
			</div>

			<div className={`${isOpen ? 'h-auto' : 'h-0'} ml-1.5 overflow-hidden border-l`}>
				<>{children}</>
			</div>
		</div>
	)
}
