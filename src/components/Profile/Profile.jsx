
import PropTypes from 'prop-types';
import  styles  from "./profile.module.css";




const Profile = ({ username, tag, location, avatar, stats })  => {
 
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={avatar}
          alt={username}
          className={styles.foto}
        />
        <p className={styles.titleUsername}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

        <ul className={styles.listStats}>
          <li className={styles.itemStats}>
            <span className={styles.titleStats}>Followers</span>
          <span className={styles.valueStats}>{stats.followers}</span>
        </li>
        <li className={styles.itemStats}>
          <span className={styles.titleStats}>Views</span>
          <span className={styles.valueStats}>{stats.views}</span>
        </li>
        <li className={styles.itemStats}>
          <span className={styles.titleStats}>Likes</span>
          <span className={styles.valueStats}>{stats.likes}</span>
        </li>
      </ul>              
    </div>               
 );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }).isRequired,

};





export default Profile;



