import styled from 'styled-components';

export const OnlineBox = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 50%;
  background-color: ${({ $statusFriend }) =>
    $statusFriend === true ? 'green' : 'red'};
`;

export const FriendsCard = styled.li`
  display: flex;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 5px;
  gap: 5px;
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
