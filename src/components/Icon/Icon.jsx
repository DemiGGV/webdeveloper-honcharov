import { 
    IconWrapper,
    Line1,
    Line2,
 } from "./Icon.styled.jsx"

export const Icon = ({toggleMobileMenu, isOpen}) => {
  return (
    <IconWrapper onClick = {() => toggleMobileMenu()}>
        <Line1 $isOpen={isOpen}/>
        <Line2 $isOpen={isOpen}/>
    </IconWrapper>
  )
}
