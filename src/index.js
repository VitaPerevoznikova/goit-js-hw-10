import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
axios.defaults.headers.common["x-api-key"] = "live_LRkzks08PAavXHHRSeKjPCWDogGgFHlsyqlYngH5q0KZC6GXAmBdxSJpOvCMpnHK";
import Notiflix from 'notiflix';

const elements ={
searchSelect: document.querySelector(".breed-select"),
divCatInfo: document.querySelector(".cat-info"),
loader: document.querySelectorAll(".loader"),
error: document.querySelector(".error"),
};
 
const {searchSelect, divCatInfo, loader, error } = elements;

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');