import Index from "../../../Components/Items/Index/Index";

const Indexpage = ({ user, users, authenticated }) => {
  return <Index user={user} users={users} authenticated={authenticated} />;
};

export default Indexpage;
