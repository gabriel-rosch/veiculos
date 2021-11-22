import { useEffect, useState } from "react";
import { Container, Cadastro, Table } from "./styles";

function App() {
  const [veiculos, setVeiculos] = useState([]);

  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [isAlteracao, setIsAlteracao] = useState(false);
  

  function cadastrarVeiculo() {
    const veiculo = { placa, modelo, marca, ano };
    debugger
    if (isAlteracao) {
      let index = getIndexForPlaca(veiculo.placa);
      veiculos[index] = veiculo;
      setVeiculos([...veiculos]);
      limparFormulario();
      setIsAlteracao(false);
    } else {
      if (isVeiculoExistente(veiculo.placa)) {
        alert("Placa já cadastrada");
      } else {
        veiculos.push(veiculo);
        setVeiculos([...veiculos]);
        limparFormulario();
      }
    }
  }

  function getIndexForPlaca(placa) {
    let index = null;

    veiculos.forEach(veiculo => {
      if(veiculo.placa === placa){
        index = veiculos.indexOf(veiculo)
      }
    })

    return index
  }

  function excluirVeiculo(veiculo) {
    let index = veiculos.indexOf(veiculo);
    veiculos.splice(index, 1);
    setVeiculos([...veiculos]);
  }

  function alterarVeiculo(veiculo) {
    setPlaca(veiculo.placa);
    setModelo(veiculo.modelo);
    setMarca(veiculo.marca);
    setAno(veiculo.ano);
    setIsAlteracao(true);
  }

  function limparFormulario() {
    setPlaca("");
    setModelo("");
    setMarca("");
    setAno("");
  }

  function isVeiculoExistente(placa) {
    let retorno = false;
    veiculos.forEach((veiculo) => {
      if (veiculo.placa === placa) {
        retorno = true;
      }
    });
    return retorno;
  }

  useEffect(() => {
    console.log(isAlteracao)
  },[isAlteracao])

  return (
    <Container>
      <Cadastro>
        <input
          readOnly={isAlteracao}
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
                  <tr key={veiculo.placa}>
                    <td>{veiculo.placa}</td>
                    <td>{veiculo.modelo}</td>
                    <td>{veiculo.marca}</td>
                    <td>{veiculo.ano}</td>
                    <td>
                      <button
                        onClick={() => {
                          excluirVeiculo(veiculo);
                        }}
                      >
                        X
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          alterarVeiculo(veiculo);
                        }}
                      >
                        Alterar
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
