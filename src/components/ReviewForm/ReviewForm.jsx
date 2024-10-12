import React from "react";
import {
  RiEmotionUnhappyFill,
  RiEmotionNormalFill,
  RiEmotionHappyFill,
  RiEmotionLaughFill,
} from "react-icons/ri";
import "./ReviewForm.css";

const ReviewForm = ({ form, updateForm }) => {
  return (
    <div className="fade-in">
      <div className="radio-area text-secondary d-flex justify-content-center align-items-center text-center gap-4 mt-3">
        <input
          type="radio"
          name="rate"
          id="bad"
          value="bad"
          checked={form.rate === "bad"}
          onChange={(e) => updateForm('rate' , e.target.value)}
          className="d-none"
        />
        <label
          htmlFor="bad"
          className="rating d-flex flex-column align-items-center"
        >
          <RiEmotionUnhappyFill size={35} />
          <p>Insatisfeito</p>
        </label>

        <input
          type="radio"
          name="rate"
          id="average"
          value="average"
          checked={form.rate === "average"}
          onChange={(e) => updateForm('rate' , e.target.value)}
          className="d-none"
        />
        <label
          htmlFor="average"
          className="rating d-flex flex-column align-items-center"
        >
          <RiEmotionNormalFill size={35} />
          <p>Normal</p>
        </label>

        <input
          type="radio"
          name="rate"
          id="good"
          value="good"
          checked={form.rate === "good"}
          onChange={(e) => updateForm('rate' , e.target.value)}
          className="d-none"
        />
        <label
          htmlFor="good"
          className="rating d-flex flex-column align-items-center"
        >
          <RiEmotionHappyFill size={35} />
          <p>Agradável</p>
        </label>

        <input
          type="radio"
          name="rate"
          id="awesome"
          value="awesome"
          checked={form.rate === "awesome"}
          onChange={(e) => updateForm('rate' , e.target.value)}
          className="d-none"
        />
        <label
          htmlFor="awesome"
          className="rating d-flex flex-column align-items-center"
        >
          <RiEmotionLaughFill size={35} />
          <p>Excelente</p>
        </label>
      </div>
      <hr />
      <div className="text-area">
        <label htmlFor="opnion">
          Deixe sua avaliação:
        </label>
        <textarea
          className="form-control my-3"
          name="opnion"
          id="opnion"
          cols="50"
          rows="10"
          placeholder="Diga um pouco sobre sua experiência..."
          value={form.comment || ""}
          onChange={(e) => updateForm("comment", e.target.value)}
          required
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
