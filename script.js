function getAddress() {
    cep = document.querySelector("#cep");
    url = "https://viacep.com.br/ws/" + cep.value + "/json/";

    returnAddress(url);


}

async function returnAddress(url) {
    const response = await fetch(url);
    const json = await response.json();
    setCampos(json);
}

function setCampos(campos) {
    (document.querySelector('#Cep')).innerHTML = campos.cep;
    (document.querySelector('#cidade')).innerHTML = campos.localidade;
    (document.querySelector('#bairro')).innerHTML = campos.bairro;
    (document.querySelector('#rua')).innerHTML = campos.logradouro;
    (document.querySelector('#estado')).innerHTML = campos.uf;
    (document.querySelector('#ibge')).innerHTML = campos.ibge;
}