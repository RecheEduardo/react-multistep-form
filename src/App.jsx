import { useState } from "react";
import "./App.css";

// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm/UserForm";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import Thanks from "./components/Thanks/Thanks";
import FormLevel from "./components/FormLevel/FormLevel";
import Footer from "./components/Footer/Footer";

const data = {
  name: "",
  email: "",
  rate: "",
  comment: "",
};

function App() {

  const [form, setForm] = useState(data);
  const [count, setCount] = useState(0);

  const updateForm = (key, value) => {
    setForm((prevData) => {
      return { ...prevData, [key]: value };
    });
  };

  const formComponents = [
    <UserForm form={form} updateForm={updateForm} />,
    <ReviewForm form={form} updateForm={updateForm} />,
    <Thanks form={form} />,
  ];

  
  const handleAdvance = (e) => {
    e.preventDefault();

    if (count >= 2) {
      return;
    }

    setCount((prevCount) => prevCount + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();

    if (count <= 0) {
      return;
    }

    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="container main-content d-flex flex-column align-items-center pt-5">
        <h1>Agradecemos sua compra</h1>
        <p className="text-center">
          Obrigado pela preferência! Realize abaixo sua avaliação do nosso
          atendimento
        </p>
        <div className="form-container pt-4 w-100 text-primary">
          <FormLevel count={count} />
          <form onSubmit={handleAdvance}>
            <div className="card inputs-container mb-4 p-3 shadow-sm p-3 mb-5 bg-white rounded">
              {formComponents[count]}
            </div>
            <div className="buttons d-flex gap-2 justify-content-end mb-4">
              <button
                className="btn btn-primary"
                type="button"
                id="back-btn"
                onClick={handleBack}
                disabled={count === 0}
              >
                <GrFormPrevious />
                Voltar
              </button>
              <button className="btn btn-primary" type="submit" id="next-btn">
                {count === 2 ? "Finalizar" : "Avançar"}
                <GrFormNext />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
