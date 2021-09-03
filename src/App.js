import user from "./Data/profile.json";
import statistics from "./Data/statistics.json";
import transaction from "./Data/TransactionHistory.json";
import friends from "./Data/friends.json";
import FriendList from "./components/FriendList/friendlist";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHystory/TransactionHistory";

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
