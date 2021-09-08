import user from "../../data/profile.json";
import statistics from "../../data/statistics.json";
import transaction from "../../data/TransactionHistory.json";
import friends from "../../data/friends.json";
import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import TransactionHistory from "../TransactionHystory/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" items={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}
