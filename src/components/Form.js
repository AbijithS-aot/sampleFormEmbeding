import React from "react";

function Form() {
  return (
    <div className="mt-3 d-flex align-items-center justify-content-around">
      <img src="https://i.pinimg.com/736x/03/2d/b5/032db574a23b523b79481d8d222a41ca.jpg" style={{width:"600px"}} className="img-fluid" alt="..." />
      <div style={{width:"600px"}} >
      <formsflow-wc
        keycloakUrl="https://iam.aot-technologies.com/auth"
        url="https://app2.aot-technologies.com/formio/form/637c9e5d67cc25fcf66d102c"
        realm="forms-flow-mahagony"
        clientId="forms-flow-web"
        message ="Thank you for your response"
      ></formsflow-wc>
      </div>
    </div>
  );
}

export default Form;
