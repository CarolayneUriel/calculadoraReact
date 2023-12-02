import React, { useState } from "react";
import * as S from "./MainStyle";

export default function Index() {
  const [valor, setValor] = useState("0");
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [operador, setOperador] = useState("");

  const inserirValor = (e) => {
    const pegarValor = e.target.value;
    if (valor === "0") {
      setValor(pegarValor);
    } else {
      setValor(valor + pegarValor);
    }
  };

  const operacao = (op) => {
    setOperador(op);
    setPrimeiroValor(valor);
    setValor("0");
  };

  const calcularResultado = () => {
    const segundoValor = valor;
    let resultado;
    switch (operador) {
      case "+":
        resultado = parseFloat(primeiroValor) + parseFloat(segundoValor);
        break;
      case "-":
        resultado = parseFloat(primeiroValor) - parseFloat(segundoValor);
        break;
      case "*":
        resultado = parseFloat(primeiroValor) * parseFloat(segundoValor);
        break;
      case "/":
        if (parseFloat(segundoValor) === 0) {
          resultado = "Erro";
        } else {
          resultado = parseFloat(primeiroValor) / parseFloat(segundoValor);
        }
        break;
      default:
        resultado = valor;
    }

    setValor(resultado);
    setPrimeiroValor("");
    setOperador("");
  };

  const clear = () => {
    setValor("0");
    setPrimeiroValor("");
    setOperador("");
  };

  const porcentagem = () => {
    setValor(valor / 100);
  };

  return (
    <S.Box>
      <S.Div>
        <h1>{valor}</h1>
      </S.Div>
      <S.Section>
        <S.ButtonOp onClick={clear}>C</S.ButtonOp>

        <S.ButtonOp onClick={() => operacao("-")}>-</S.ButtonOp>
        <S.ButtonOp onClick={() => operacao("*")}>*</S.ButtonOp>
        <S.ButtonOp onClick={() => operacao("/")}>/</S.ButtonOp>
        <S.ButtonOp onClick={() => operacao("+")}>+</S.ButtonOp>
        <S.ButtonOp onClick={porcentagem}>%</S.ButtonOp>

        <S.ButtonNum onClick={inserirValor} value={"7"}>
          7
        </S.ButtonNum>
        <S.ButtonNum onClick={inserirValor} value={"8"}>
          8
        </S.ButtonNum>
        <S.ButtonNum onClick={inserirValor} value={"9"}>
          9
        </S.ButtonNum>

        <S.ButtonNum onClick={inserirValor} value={"4"}>
          4
        </S.ButtonNum>
        <S.ButtonNum onClick={inserirValor} value={"5"}>
          5
        </S.ButtonNum>
        <S.ButtonNum onClick={inserirValor} value={"6"}>
          6
        </S.ButtonNum>

        <S.ButtonNum onClick={inserirValor} value={"1"}>
          1
        </S.ButtonNum>
        <S.ButtonNum onClick={inserirValor} value={"2"}>
          2
        </S.ButtonNum>
        <S.ButtonNum onClick={inserirValor} value={"3"}>
          3
        </S.ButtonNum>
        <S.ButtonNum onClick={inserirValor} value={"0"}>
          0
        </S.ButtonNum>

        <S.ButtonNum onClick={inserirValor} value={"."}>
          .
        </S.ButtonNum>

        <S.ButtonOp onClick={calcularResultado}>=</S.ButtonOp>
      </S.Section>
    </S.Box>
  );
}
