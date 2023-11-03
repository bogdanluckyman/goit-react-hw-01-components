import { StatisticBox, BoxList, ListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticBox>
      {title && <h2>{title}</h2>}
      <BoxList>
        {stats.map(item => {
          return (
            <ListItem key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}</span>
            </ListItem>
          );
        })}
      </BoxList>
    </StatisticBox>
  );
};
