<<<<<<< Updated upstream
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DefaultImg from "../../../Images/DefaultImg.png";
import "./NewItemForm.scss";

const NewItemForm = ({ user }) => {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [item, setItem] = useState({
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

  const [selectStatus, setSelectStatus] = useState("");
  const [selectCategory, setSelectCategory] = useState("Default");

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const radioButtonCheck = (e) => {
    setSelectStatus(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postItem = {
      userId: user.id,
      itemName: item.itemname,
      itemImg: item.itemimg,
      category: item.category,
      description: item.description,
      isFound: item.isfound,
      request: item.request,
      giveaway: item.giveaway,
      pinLocation: item.pinlocation,
      neighborhood: item.neighborhood,
      borough: item.borough,
      zipcode: item.zipcode,
    };

    if (selectStatus === "found") {
      postItem.isFound = true;
    } else if (selectStatus === "request") {
      postItem.request = true;
    } else if (selectStatus === "giveaway") {
      postItem.giveaway = true;
    }

    if (selectCategory !== "Default") {
      postItem.category = selectCategory;
    } else {
      return toast.error(`Please select a category for your item.`, {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
      });
    }

    await axios
      .post(`${API}/items`, postItem)
      .then((res) => {
        notify(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const notify = (item) => {
    toast.success(
      `Congradulations! ${user.username} you have successfully posted the ${item.itemname} you found. \n You will be redirected in 3 seconds.`,
      {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
      }
    );
    setTimeout(() => {
      navigate("/index");
    }, 4100);

    clearForms();
  };

  const clearForms = () => {
    setItem({
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
  };

  return (
    <section id="newItemSection">
      <div id="innerNewItemDiv">
        {error && <p>{error}</p>}
        <h2>Report an item your found</h2>
        <Form onSubmit={handleSubmit}>
          <Image
            roundedCircle
            id="lostItemImg"
            alt="Need full link for preview"
            src={item.itemimg ? item.itemimg : DefaultImg}
          />
          <br />
          <label htmlFor="name">Name:</label>
          <input
            id="itemname"
            value={item.itemname}
            type="text"
            onChange={handleChange}
            required
            className="input-style"
          />
          <div>
            <label htmlFor="image">Image:</label>
            <input
              id="itemimg"
              type="text"
              name="image"
              placeholder="http://"
              value={item.itemimg}
              onChange={handleChange}
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
              onChange={handleChange}
              className="input-style"
            />
          </div>
          <div>
            <label htmlFor="neighborhood">neighborhood:</label>
            <input
              id="neighborhood"
              value={item.neighborhood}
              type="text"
              placeholder="Last known neighborhood..."
              onChange={handleChange}
              className="input-style"
            />
          </div>
          <div>
            <label htmlFor="borough">borough:</label>
            <input
              id="borough"
              value={item.borough}
              type="text"
              placeholder="Last known borough location..."
              onChange={handleChange}
              className="input-style"
            />
          </div>
          <div>
            <label htmlFor="zipcode">zipcode:</label>
            <input
              id="zipcode"
              value={item.zipcode}
              type="number"
              placeholder="Last known zipcode location..."
              onChange={handleChange}
              className="input-style"
            />
          </div>
          <section className="radioButtonsSection">
            <Form.Check
              type="radio"
              id="isFound"
              name="radioSelect"
              value="found"
              label="Found?"
              onChange={radioButtonCheck}
              checked={selectStatus === "found"}
            />

            <Form.Check
              type="radio"
              id="request"
              name="radioSelect"
              value="request"
              label="Request?"
              onChange={radioButtonCheck}
              checked={selectStatus === "request"}
            />

            <Form.Check
              type="radio"
              id="giveaway"
              name="radioSelect"
              value="giveaway"
              label="Giveaway?"
              onChange={radioButtonCheck}
              checked={selectStatus === "giveaway"}
            />
          </section>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              value={selectCategory}
              onChange={handleCategoryChange}
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
          <Link to={"/"}>
            <Button variant="dark">Back</Button>
          </Link>{" "}
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <ToastContainer autoClose={3000} theme="dark" />
      </div>
    </section>
  );
};

export default NewItemForm;
=======
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './NewItemForm.scss'

const API = process.env.REACT_APP_API_URL;

export default function NewItemForm({user}) {
    const navigate = useNavigate()

    const [item, setItem] = useState({
        userId: user,
        itemName: "",
        itemImg: "",
        category: "",
        description: "",
        isFound: false,
        request: false,
        giveaway: false,
        pinLocation: "",
        neighborhood: "",
        borough: "",
        zipcode: ""
    })
  
    const handleTextChange = (event) => {
      setItem({ ...item, [event.target.id]: event.target.value })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post(`${API}/items`, item)
        .then(() => {
            navigate(`/items`)
        })
        .catch((err) => {
          console.warn(err)
        })
    }
    
  return (
    <div id="new-item">
        <form onSubmit={handleSubmit}>
            <img alt='Need full link for preview' src={`https://image.shutterstock.com/image-vector/sample-label-green-band-sign-260nw-1512261407.jpg`}/>
            <div>
                <Link to={'/'}>
                    <button>Back</button>
                </Link>
                <input type='submit'/>
            </div>
                <label htmlFor='name'>Name:</label>
                <input
                id='itemName'
                value={item.itemName}
                type='text'
                onChange={handleTextChange}
                required
                className='input-style'
                />
          
                <label htmlFor='image'>Image:</label>
                <input
                id='itemImg'
                type='text'
                name='image'
                placeholder='http://'
                value={item.itemImg}
                onChange={handleTextChange}
                className='input-style'
                />
           
                <label htmlFor='description'>Description:</label>
                <input
                id='description'
                value={item.description}
                type='text'
                placeholder='It helps to be as specific as possible 😇'
                onChange={handleTextChange}
                className='input-style'
                />
                <label htmlFor='category'>Category:</label>
                <select 
                    name="category" 
                    id="category"
                    onChange={handleTextChange}
                    className='input-style'
                    value={item.category}>
                    <option value="Tropical">Tropical</option>
                    <option value="Bromeliad">Bromeliad</option>
                    <option value="Fern">Fern</option>
                    <option value="Cactus & Succulent">Cactus & Succulent</option>
                    <option value="Aglaonema">Aglaonema</option>
                    <option value="Other">Other</option>
                </select>
       
        </form>
    </div>
    );
  }
>>>>>>> Stashed changes
