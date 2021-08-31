import FriendList from "./components/FriendList/friendlist";
import transaction from "./components/TransactionHystory/TransactionHistory.json"
import friends from "./components/FriendList/friends.json";
import Profile from "./components/Profile/profile";
import Statistics from "./components/Statistics/statistics";
import user from "./components/Profile/profile.json";
import statistics from "./components/Statistics/statistics.json";
import TransactionHistory from "./components/TransactionHystory/TransactionHistory";


export default function App(){
  return (<div><Profile 
    avatar ={user.avatar} 
    name ={user.name} 
    tag={user.tag} 
    location = {user.location} 
    followers = {user.stats.followers}
    views = {user.stats.views} 
    likes = {user.stats.likes}
/>
<Statistics title="Upload stats" items={statistics} />
<FriendList friends = {friends} />
<TransactionHistory items = {transaction} />
  </div>);
}
 