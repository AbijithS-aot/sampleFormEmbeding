import React from "react";

function Form() {
  return (
    <div className="mt-3">
      <formsflow-wc
        keycloakUrl="https://iam.aot-technologies.com/auth"
        url="https://app2.aot-technologies.com/formio/form/637c9e5d67cc25fcf66d102c"
        realm="forms-flow-mahagony"
        clientId="forms-flow-web"
        message ="Thank you for your response"
      ></formsflow-wc>
    </div>
  );
}

export default Form;