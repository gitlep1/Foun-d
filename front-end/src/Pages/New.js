import NewItemForm from "../Components/NavBar/NewItemForm"

export default function New({user}) {
  return (
    <div>
      <NewItemForm user={user}/>
    </div>
  );
}