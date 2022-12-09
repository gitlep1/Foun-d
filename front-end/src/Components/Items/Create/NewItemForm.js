import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DefaultImg from "../../../Images/DefaultImg.png";
import "./NewItemForm.scss";
import NewItemMap from "./NewItemMap";

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
    latitude: 0,
    longitude: 0,
    neighborhood: "",
    borough: "",
    zipcode: '',
    status: "Active",
  });
  console.log(item);

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

  const getCoordinate = (lat, lng) => {
    setItem({ ...item, latitude: lat, longitude: lng });
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
      latitude: item.latitude,
      longitude: item.longitude,
      neighborhood: item.neighborhood,
      borough: item.borough,
      zipcode: Number(item.zipcode),
      status: item.status,
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
        const newFoundItem = {
          foundUserId: res.data.userid,
          itemsId: res.data.id,
        };
        axios.post(`${API}/found`, newFoundItem).then((response) => {
          notify(res.data);
        });
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
      latitude: 0,
      longitude: 0,
      neighborhood: "",
      borough: "",
      zipcode: "",
      status: "",
    });
  };

  return (
    <section id="newItemSection">
      <h2 id="report-h2">Report an item your found</h2>
      {error && <p>{error}</p>}
      <div id="innerNewItemDiv">
        <NewItemMap getCoordinate={getCoordinate} />
        <Form id="form" onSubmit={handleSubmit}>
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
            <label htmlFor="neighborhood">Neighborhood:</label>
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
            <label htmlFor="borough">Borough:</label>
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
            <label htmlFor="zipcode">Zipcode:</label>
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
