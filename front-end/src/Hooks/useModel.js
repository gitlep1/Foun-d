import { useState } from "react";
import "./useModel.scss";

export default function useModel() {
  const [model, setModel] = useState(false);

  const modelStructure = (
    <div className="model-style">
      <div className="box-model">
        <h1 className="text-model">
          Are you sure you want to delete this item?
        </h1>
        <button onClick={() => setModel(false)} className="model-stop-button">
          Don't delete
        </button>
        <button onClick={() => {}} className="model-continue-button">
          Yes, please!
        </button>
      </div>
    </div>
  );

  return [model, setModel, modelStructure];
}
