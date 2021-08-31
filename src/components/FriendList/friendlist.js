import PropTypes from "prop-types";
import FriendListItem from "./friendlistitem";
import s from "./FriendList.module.css";
export default function FriendList({friends}){
return(
<ul className={s.friend_list}>
 {friends.map((friend) => (
  <FriendListItem
avatar = {friend.avatar}
name = {friend.name}
isOnline  = {friend.isOnline}
key = {friend.id}

  />
 )
 )
 }
</ul>
)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
  name:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired
}))}