import React from "react";
import { FaUserAlt, FaStar, FaRegPaperPlane } from "react-icons/fa";

const FormLevel = ({ count }) => {
  return (
    <div className="form-top d-flex justify-content-between align-items-center py-3">
      <div
        className="indentify d-flex flex-column align-items-center gap-3"
        style={count === 0 ? 
          { opacity: 1 }
          : { opacity: 0.5,color: "var(--bs-gray-dark)", transitionDuration: ".25s" }
        }
      >
        <FaUserAlt size={25} />
        <h6>Identificação</h6>
      </div>

      <div className="vr"></div>

      <div
        className="avaliation d-flex flex-column align-items-center gap-3"
        style={count === 1 ? 
          { opacity: 1 }
          : { opacity: 0.5, color: "var(--bs-gray-dark)",transitionDuration: ".25s" }
        }
      >
        <FaStar size={25} />
        <h6>Avaliação</h6>
      </div>

      <div className="vr"></div>

      <div
        className="send d-flex flex-column align-items-center gap-3"
        style={
          count === 2
            ? { opacity: 1 }
            : { opacity: 0.5,color: "var(--bs-gray-dark)", transitionDuration: ".25s" }
        }
      >
        <FaRegPaperPlane size={25} />
        <h6>Envio</h6>
      </div>
    </div>
  );
};

export default FormLevel;
