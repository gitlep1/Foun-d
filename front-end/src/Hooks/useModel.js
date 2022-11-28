import { useState } from 'react';
import "./useModel.scss"

export default function useModel({condition}) {
  const [model, setModel] = useState(false);

  const modelStructure = (
      <div class="model-style">
        <div class="box-model">
          <h1 class="text-model">
            Are you sure you want to continue?
          </h1>
          <button
            onClick={() => setModel(false)}
            class="model-stop-button"
          >
            Don't delete
          </button>
          <button
            onClick={() => {}}
            className="model-continue-button"
          >
            Yes, please
          </button>
        </div>
      </div>
    );

  return [model, setModel, modelStructure];
}