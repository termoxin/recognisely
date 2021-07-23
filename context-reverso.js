import Reverso from "reverso-api";
const reverso = new Reverso();

reverso.getContext("tailbone", "English", "Russian").then(console.log);
