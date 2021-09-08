import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${isOnline ? s.status_red : s.status_green}`}
      />

      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
