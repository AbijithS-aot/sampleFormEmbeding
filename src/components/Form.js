import React, { useEffect } from "react";

function Form() {
    const configFile = {
      keycloakUrl:
      'https://iam3.aot-technologies.com/auth',
    realm: 'multitenant',
    clientId: 'check2510-forms-flow-web',
    authenticationType : "anonymous",
    webApiUrl: 'https://app1.aot-technologies.com/api',
    }
  useEffect(()=>{
    document.querySelector('formsflow-wc').setAttribute('configFile',JSON.stringify(configFile));
  },[])
  return (
    <div className="mt-3 d-flex align-items-center justify-content-around">
      <img src="https://i.pinimg.com/736x/03/2d/b5/032db574a23b523b79481d8d222a41ca.jpg" style={{width:"600px"}} className="img-fluid" alt="..." />
      <div style={{width:"600px"}} >
      <formsflow-wc
      configFile
      // anonymousUrl = "https://app2.aot-technologies.com/formio/anonymousembedtest"
      formName = "check2510-embed"
      anonymousUrl="https://app1.aot-technologies.com/formio/check2510-anonymous"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYW1wbGUiLCJlbWFpbCI6InNhbXBsZUBlbWFpbC5jb20iLCJ0ZW5hbnRLZXkiOiJjaGVjazI1MTAifQ.KhtKeDIk5PxSuhV8ObN_OB0FmmGwtTzvtWDGc7Vl8DA"
      message ="Thank you for your Response"
      ></formsflow-wc>  
      </div>
    </div>
  );
}

export default Form;
