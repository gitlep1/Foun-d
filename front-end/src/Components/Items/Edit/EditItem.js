import { useState, useEffect} from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import { Button } from "react-bootstrap";
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
		status: ""
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
			console.log(itemId)
			axios
      .put(`${API}/items/${itemId}`, item)
      .then((res) => {
        setItem(res.data);
				navigate(`/show/${itemId}`);
      })
      .catch((err) => {
        console.warn(err);
      });
		} else {
			alert('This item belongs to another user. You can only edit your items.')
			navigate('/index')
		}
  };

	console.log(item)
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
        <div id='button-edit-form'>
          <Button variant="dark" onClick={() => {navigate('/index')}}>
            Back
          </Button>
					<Button type='submit' variant="success">
            Edit
          </Button>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="itemname"
            value={item.itemname}
            type="text"
            onChange={handleTextChange}
            required
            className="input-style"
          />
        </div>
				<div>
            <label htmlFor="status">Status:</label>
            <select
							id='status'
              value={item.status}
              onChange={handleTextChange}
              className="input-style"
            >
              <option value='Default'>--- Select Status  ---</option>
              <option value="Active">Active (Item has no claims)</option>
							<option value="Pending">Pending (Item has a claim request)</option>
							<option value="Completed">Completed (Item returned to owner)</option>
              <option value="Donated">Donated (Item has been disposed of or giving to charity)</option>
            </select>
          </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            id="itemimg"
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
							id="category"
              value={item.category}
              onChange={handleTextChange}
              className="input-style"
            >
              <option value="Default">--- Select A Category ---</option>
              <option value="Pets">Pets</option>
              <option value="Toys">Toys</option>
              <option value="Health">Health</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Personal">Personal</option>
              <option value="Clothing">Clothing</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronic">Electronic</option>
              <option value="Accessories">Accessories</option>
              <option value="Botany">Botany (Plants)</option>
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