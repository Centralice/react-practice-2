import clsx from "clsx";
import css from "./FriendListItem.module.css";

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <li>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? "online" : "offline"}
      </p>
    </li>
  );
}
