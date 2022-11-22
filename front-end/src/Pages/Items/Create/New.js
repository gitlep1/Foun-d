import NewItemForm from "../../../Components/Items/Create/NewItemForm";
import "./New.scss";

export default function New({ user }) {
  return (
    <div className="newPage-container">
      <h2>Report an item your found</h2>
      <NewItemForm user={user} />
    </div>
  );
}
