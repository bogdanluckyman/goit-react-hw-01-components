import styled from 'styled-components';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticBox = styled.section`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 300px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const BoxList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50px;
  padding: 10px;
  background-color: ${getRandomHexColor};
`;
