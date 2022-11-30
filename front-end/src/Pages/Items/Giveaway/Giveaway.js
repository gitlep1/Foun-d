import Index from "../../../Components/Items/Index/Index";

const GiveawayPage = ({ user, users, authenticated }) => {
  return <Index user={user} users={users} authenticated={authenticated} />;
};

export default GiveawayPage;