import { ProfileCard, CardList, ListItem } from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <ProfileCard>
      <div>
    <img
      src={avatar}
      alt={username}
      width={200}
      height={200}
    />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <CardList>
    <ListItem>
      <span>Followers: </span>
      <span>{followers}</span>
    </ListItem>
    <ListItem>
      <span>Views: </span>
      <span>{views}</span>
    </ListItem>
    <ListItem>
      <span>Likes: </span> 
      <span>{likes}</span>
    </ListItem>
  </CardList>
</ProfileCard>
)}


