import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Cookies } from "react-cookie";

const SpotifyGetButton: React.FC<{ getToken: () => void }> = ({ getToken }) => {
  function handleClickEvent() {
    getToken();
  }
  return <>{<button onClick={handleClickEvent}>Get token</button>}</>;
};

export default SpotifyGetButton;
