import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={css.item}>
          <span className={clsx(css.status, isOnline && css.isOnline)}
          ></span>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
