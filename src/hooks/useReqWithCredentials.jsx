import React, { useState } from "react";

const useReqWithCredentials = async (requestType, endPoints, data = {}) => {
  const baseUrl = "http://127.0.0.1:3000";
  const token = localStorage.getItem("__at");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  return await fetch(`${baseUrl}${endPoints}`, {
    method: requestType,
    headers,
    body: JSON.stringify(data),
  }).then(res => res.json());
};

export default useReqWithCredentials;
