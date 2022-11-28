import { useState, useEffect} from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "./EditItem.scss";
import useModel from "../../../Hooks/useModel"

const API = process.env.REACT_APP_API_URL;

export default function EditItem({ user }){
	const navigate = useNavigate();
  const { itemId } =  useParams();
	const [model, setModel, modelStructure] = useModel({condition: "edit"})

  const [item, setItem] = useState({
    userid: user,
    itemname: "",
    itemimg: "",
    category: "",
    description: "",
    isfound: false,
    request: false,
    giveaway: false,
    pinlocation: "",
    neighborhood: "",
    borough: "",
    zipcode: "",
  });

	useEffect(() => {
    axios
      .get(`${API}/items/${itemId}`)
      .then((res) => {
        setItem(res.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [itemId])

  const handleTextChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
		event.preventDefault();
		if (item.userid === user){
			axios
      .put(`${API}/items/${itemId}`, item)
      .then((res) => {
				console.log(res)
        setItem(res.data);
        navigate("/index");
      })
      .catch((err) => {
        console.warn(err);
      });
		} else {
			alert('This item belongs to another user. You can only edit your items.')
			navigate('/index')
		}
  };

  return (
    <section id="editItemSection">
			{model ? modelStructure : ''}
			<h1>Edit {item.itemname}</h1>
			<div className="flex-div">
			<img
          alt="Need full link for preview"
					className="editItemImage"
					width= "350px"
					height= "350px"
          src={ item.itemimg ? item.itemimg : `https://image.shutterstock.com/image-vector/sample-label-green-band-sign-260nw-1512261407.jpg`}
        />
      <form onSubmit={handleSubmit} id="edit-form">
        <div>
          <Link to={"/index"}>
            <button>Back</button>
          </Link>
          <input type="submit" />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="itemName"
            value={item.itemname}
            type="text"
            onChange={handleTextChange}
            required
            className="input-style"
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            id="itemImg"
            type="text"
            name="image"
            placeholder="http://"
            value={item.itemimg}
            onChange={handleTextChange}
            className="input-style"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            value={item.description}
            type="text"
            placeholder="It helps to be as specific as possible 😇"
            onChange={handleTextChange}
            className="input-style"
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            onChange={handleTextChange}
            className="input-style"
            value={item.category}
          >
						<option value="Other">{item.category}</option>
            <option value="Other">Other</option>
          </select>
					</div>
					<div>
          <label htmlFor="neighborhood">Neighborhood:</label>
          <input
            id="neighborhood"
            value={item.neighborhood}
            type="text"
            onChange={handleTextChange}
            className="input-style"
          />
        </div>
				<div>
          <label htmlFor="borough">Borough:</label>
          <input
            id="borough"
            value={item.borough}
            type="text"
            onChange={handleTextChange}
            className="input-style"
          />
        </div>
				<div>
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            id="zipcode"
            value={item.zipcode}
            type="number"
						placeholder="00000"
            onChange={handleTextChange}
            className="input-style"
          />
        </div>
      </form>
			</div>
		</section>
  );
}