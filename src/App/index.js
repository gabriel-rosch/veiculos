import { useState } from "react";
import { Container, Cadastro, Table } from "./styles";
import { IconName } from 'react-icons/fa';

function App() {
  const [veiculos, setVeiculos] = useState([]);

  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");

  function cadastrarVeiculo() {
    const veiculo = {placa,modelo,marca,ano};
    if(isVeiculoExistente(veiculo.placa)){
      alert('Placa já cadastrada')  
    } else {
      veiculos.push(veiculo);
      const newVeiculos = [...veiculos] //criar novo array com os mesmos valores
      setVeiculos(newVeiculos)
      limparFormulario();
    }
  };

  function excluirVeiculo(veiculo) {
    let index = veiculos.indexOf(veiculo);
    veiculos.splice(index, 1);
    setVeiculos([...veiculos]);
  }

  function limparFormulario() {
    setPlaca('')
    setModelo('')
    setMarca('')
    setAno('')
  }

  function isVeiculoExistente(placa) {
    let retorno = false;
    veiculos.forEach(veiculo => {
      if(veiculo.placa === placa) {
        retorno = true;
      }
    })
    return retorno
  }

  return (
    <Container>
      <Cadastro>
        <input
          value={placa}
          placeholder="Placa"
          onChange={(e) => setPlaca(e.target.value)}
        />
        <input
          value={modelo}
          placeholder="Modelo"
          onChange={(e) => setModelo(e.target.value)}
        />
        <input
          value={marca}
          placeholder="Marca"
          onChange={(e) => setMarca(e.target.value)}
        />
        <input
          value={ano}
          placeholder="Ano"
          onChange={(e) => setAno(e.target.value)}
        />
        <button onClick={cadastrarVeiculo}>Cadastrar Veiculo</button>
        <Table>
          <table>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              {veiculos.map((veiculo) => {
                return (
                  <tr>
                    <td>{veiculo.placa}</td>
                    <td>{veiculo.modelo}</td>
                    <td>{veiculo.marca}</td>
                    <td>{veiculo.ano}</td>
                    <td>
                      <button  onClick={() => {excluirVeiculo(veiculo)}}>
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Table>
      </Cadastro>
    </Container>
  );
}

export default App;
