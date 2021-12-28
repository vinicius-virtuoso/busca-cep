const btnForm = document.querySelector('.btn');
btnForm.addEventListener('click', validateInput)

function validateInput(e) {
  e.preventDefault()
  const inputForm = document.querySelector('#cep');
  const inputValue = inputForm.value;

  if (inputValue === '') {
    inputForm.classList.add('error');
  } else {
    inputForm.classList.remove('error');
    fetchCep(inputValue)
  }
}

function fetchCep(cep) {
  if (cep !== undefined || null) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then(res => {
        console.log(res)
        const listRes = document.querySelector('.text-infos')
        const { bairro, cep, complemento, ddd, ibge, localidade, logradouro, siafi, uf } = res;

        listRes.innerHTML = `
        <div class="box-info">
          <p class="title">bairro:</p>
          <span class="info">${bairro}</span>
        </div>

        <div class="box-info">
          <p class="title">cep:</p>
          <span class="info">${cep}</span>
        </div>

        <div class="box-info">
          <p class="title">complemento:</p>
          <span class="info">${complemento}</span>
        </div>
        <div class="box-info">
          <p class="title">ddd:</p>
          <span class="info">${ddd}</span>
        </div>
        <div class="box-info">
          <p class="title">ibge:</p>
          <span class="info">${ibge}</span>
        </div>
        <div class="box-info">
          <p class="title">localidade:</p>
          <span class="info">${localidade}</span>
        </div>
        <div class="box-info">
          <p class="title">logradouro:</p>
          <span class="info">${logradouro}</span>
        </div>
        <div class="box-info">
          <p class="title">siafi:</p>
          <span class="info">${siafi}</span>
        </div>
        <div class="box-info">
          <p class="title">uf:</p>
          <span class="info">${uf}</span>
        </div>
        `
      }).catch(err => console.log(err))
  } else {
    console.log('Error: Input vazio!')
  }
}

fetchCep()





