import React, { useEffect, useState } from 'react'
// import Item from './Item'

const Frontend = () => {

	const [dados, setDados] = useState([]) // const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState(""); // const [search, setSearch] = useState("");
	const [FilteredNames, setFilteredNames] = useState([]); // const [filteredCountries, setFilteredCountries] = useState([]);

	// const [countries, setCountries] = useState([]);
	// const [search, setSearch] = useState("");
	// const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/random/200')
		// fetch('https://restcountries.eu/rest/v2/all')
		.then(resposta => resposta.json()) 
		.then(dados =>  {
			console.log(dados)
			const dado = dados.map(d => ({
				nome: d.name,
				endereco: d.address,
				cidade: d.city,
				estado: d.state,
				pais: d.country,
				site: d.website,
				descricao: d.description
			}))

			setDados(dado)
			console.log(dado)
			// setCountries(dados)
			 
		})
	}, [])

	useEffect(() => {
		setFilteredNames(

			dados.filter((d) =>
				d.nome.toLowerCase().includes(search.toLowerCase())
			)
		)
	}, [search, dados])

	return (
		// <div className="App">
		// 	<h1>Countries Lists</h1>
		// 	<input
		// 		type="text"
		// 		placeholder="Search Countries"
		// 		onChange={(e) => setSearch(e.target.value)}
		// 	/>
		// 	{filteredCountries.map((country, idx) => (
		// 		<CountryDetail key={idx} {...country} />
		// 	))}
		// </div>
		<>
			<div>
				<input
					type="text"
					placeholder="Search names"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div>
				<ul>
					{FilteredNames.map((d, index) => (
					
						<li key={index}>
							<div>
								<strong>Nome: </strong>
								{d.nome}		
							</div>
							<div>
								<strong>Logradouro: </strong>
								{d.endereco}
							</div>
							<div>
								<strong>Cidade: </strong>
								{d.cidade}
							</div>
							<div>
								<strong>Estado: </strong>
								{d.estado}
							</div>
							<div>
								<strong>Pais: </strong>
								{d.pais}
							</div>
							<div>
								<strong>Website: </strong>
								{d.site}
							</div>
							<div>
								<strong>Descrição: </strong>
								{d.descricao}
							</div>
						</li>					
					))}

				</ul>
				
			</div>
		</>
	)
}

// const CountryDetail = (props) => {
// 	const { name, flag } = props;

// 	return (
// 		<>
// 			<p>
// 				<img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
// 			</p>
// 			<p>{name}</p>
// 		</>
// 	);
// };
export default Frontend;
// state: d.estado Pennsylvania