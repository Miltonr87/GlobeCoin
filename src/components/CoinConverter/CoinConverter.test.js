import React from "react";
import ReactDOM from "react-dom";
import CoinConverter from "./index.js";

describe("Teste do componente de conversão de moedas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CoinConverter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
