import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "https://iam.aot-technologies.com/auth",
  realm: "forms-flow-mahagony",
  clientId: "forms-flow-web",
};

const KeycloakData = new Keycloak(keycloakConfig);

export const initKeycloak = (done) => {
    
  KeycloakData.init({
    onLoad: "check-sso",
    promiseType: "native",
    silentCheckSsoRedirectUri:
    window.location.origin + "/silent-check-sso.html",
    pkceMethod: "S256",
    checkLoginIframe: false,
  }).then((authenticated)=>{
    if(authenticated){
            done(KeycloakData)
    }else{
        // KeycloakData.login();
        done(KeycloakData)
    }
  })
};

