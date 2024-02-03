import "./../style/pages/remainder.scss";

import { useEffect, useState } from "react";

const clientId = "663518506451-mdgkq5mo4nns172l43gijg3ui3bogd92.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUri = "/remainder";

const useGoogleApi = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
      window.gapi.load("client:auth2", () => {
        window.gapi.client.init({
          clientId: clientId,
          scope: "https://www.googleapis.com/auth/calendar",
        });
      });
    };
    document.body.appendChild(script);
  }, []);
};

const Remainder = () => {
  useGoogleApi();
  return (
    <>
      <button onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>
        login with google
      </button>
    </>
  );
};

export default Remainder;
