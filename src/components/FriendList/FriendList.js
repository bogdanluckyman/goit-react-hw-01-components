import { OnlineBox, FriendsCard } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({avatar, name, isOnline, id}) => {
       return <FriendsCard key={id}>
         <OnlineBox $statusFriend={isOnline} />
         <img src={avatar} alt={name} width="48" />
         <p>{name}</p>
</FriendsCard>
     })} 
    </ul>
  )
}
