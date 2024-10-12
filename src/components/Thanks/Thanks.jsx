import React, { useState } from "react";
import "./Thanks.css";
import {
  RiEmotionUnhappyFill,
  RiEmotionNormalFill,
  RiEmotionHappyFill,
  RiEmotionLaughFill,
} from "react-icons/ri";

const Thanks = ({ form }) => {
  const [emoticon, setEmoticon] = useState(form.rate);

  switch (emoticon) {
    case "bad":
      setEmoticon(<RiEmotionUnhappyFill size={25} />);
      break;
    case "average":
      setEmoticon(<RiEmotionNormalFill size={25} />);
      break;
    case "good":
      setEmoticon(<RiEmotionHappyFill size={25} />);
      break;
    case "awesome":
      setEmoticon(<RiEmotionLaughFill size={25} />);
      break;
    default:
      break;
  }

  return (
    <div className="tks text-center px-3 fade-in">
      <h1 className="my-2">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        <strong>{' '}Para concluir...</strong>
      </h1>
      <hr />
      <p>
        Agradeçemos sua avaliação, quando você clica em{" "}
        <strong>Finalizar</strong> e deixa seu feedback, um novo cupom de
        desconto de 10% é disponibilizado na sua conta!
      </p>
      <p>
        Para visualizá-lo, entre em: <strong>Usuários &gt; Cupons</strong>
      </p>
      <hr />
      <h4 className="my-3">
        Olá <strong>{form.name}</strong>, aqui estão os dados da sua avaliação:
      </h4>
      <p className="text-start">
        <strong>Satisfação com o produto: {emoticon}</strong>
      </p>
      <p className="text-start">
        <strong>Comentário: </strong>
        {form.comment}
      </p>
    </div>
  );
};

export default Thanks;
