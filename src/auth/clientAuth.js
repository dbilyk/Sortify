import auth0 from "auth0-js"
import jwtDecode from "jwt-decode"

export default class auth {
  auth0 = new auth0.WebAuth({
    domain: 'sortify.auth0.com',
    clientID: 'q5fHJP64SkbLiiTq71E57PRRkkYWbs6o',
    redirectUri: 'http://localhost:3001/home',
    //ou will use the identifier as an audience later, when you are configuring the Access Token verification.
    audience: 'http://dmitribi.wwwaz1-ss3.a2hosted.com/sortify/',
    responseType: 'token id_token',
    scope: 'openid email profile'
  })

  login(){
    this.auth0.authorize();
  }

  ID_PAYLOAD
  API_TOKEN


  

}

//saves the provided auth and ID info
  export const SaveAuthTokens = ({authInstance})=>{
    
    function getUrlParameterByName(name) {
      var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    authInstance.API_TOKEN = getUrlParameterByName("access_token")
    authInstance.ID_PAYLOAD = getUrlParameterByName("id_token")


    localStorage.setItem("API_TOKEN",authInstance.API_TOKEN)
    localStorage.setItem("ID_PAYLOAD",authInstance.API_TOKEN)

    let authHeader = new Headers()
    authHeader.append("authorization","bearer " + authInstance.API_TOKEN)
    fetch("/api/check",{
      headers: authHeader
    })

    fetch("/api/user_projects")

    return null
  } 