import { MouseEventHandler } from "react"

export interface IButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
    text: string
}