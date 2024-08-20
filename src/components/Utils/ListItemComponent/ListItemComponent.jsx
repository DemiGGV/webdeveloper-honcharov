import { 
    CardContainer,
    CardHeader,
    Profession,
    Time,
    Company,
    Description
 } from "./ListItemComponent.styled";

export const ListItemComponent = ({data}) => {
  const { company, profession, time, description } = data
  return (
    <CardContainer>
      <CardHeader>
        <Profession>{profession}</Profession>
        <Time>{time}</Time>
      </CardHeader>
      <Company>{company}</Company>
      <Description>{description}</Description>
    </CardContainer>
  );
};
