/*API para buscar cep via, "viacep.com.br" */
const cep = document.querySelector ("#cep")

const showData = (result) => {
    for (const campo in result){
        if (document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result [campo]
        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-","")
    const option = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    fetch (`https://viacep.com.br/ws/${search}/json/`, option)
    .then (Response => { Response.json()
        .then (data => showData(data))
    })
    .catch (e=> console.log ('Deu erro:' + e,message))
})

/* Mascara de CEP */

document.querySelectorAll('input').forEach($input =>{
	const field = $input.dataset.js

	$input.addEventListener('input', e=>{
		e.target.value = masks [field](e.target.value)
	}, false)
})


const masks = {
	cep (value){
		return value

		.replace(/\D/g, '')
		.replace(/(\d{5})(\d)/, '$1-$2')
		.replace(/(-\d{3})\d+?$/, '$1')
	},
}
/*======================================*/