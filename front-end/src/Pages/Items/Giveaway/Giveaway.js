import GiveawayIndex from "../../../Components/Items/Giveaway/GiveawayIndex"

const GiveawayPage = ({ user, users, authenticated }) => {
  return <GiveawayIndex user={user} users={users} authenticated={authenticated} />;
};

export default GiveawayPage;