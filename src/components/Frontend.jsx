import React, { useEffect, useState } from 'react'
import Item from './Item'

const Frontend = () => {

	const [dados, setDados] = useState([]) 
	const [SearchName, setSearchName] = useState(""); 
	const [FilteredNames, setFilteredNames] = useState([]); 

	useEffect(() => {
		fetch('http://localhost:3000/random/300')

		.then(resposta => resposta.json()) 
		.then(dados =>  {
			// console.log(dados)
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
		})
	}, [])

	useEffect(() => {
		console.log(dados)
			console.log("nome")
			setFilteredNames(
				dados.filter((d) =>
				
					d.nome.toLowerCase().includes(SearchName.toLowerCase())				
				)
			)
	}, [SearchName, dados])

	return (
		<>
			<div>
				<div>
					<h4>Filtro </h4>
					<input
						type="text"
						placeholder="Filtrar por nome"
						onChange={(e) => setSearchName(e.target.value)}
					/>
				</div>
			</div>
			<div>
				<ul>
					{FilteredNames.map((d, index) => (
						
						// <li key={index}>
						// 	<div>
						// 		<strong>Nome: </strong>
						// 		<p>
						// 			{d.nome}
						// 		</p>
										
						// 	</div>
						// 	<div>
						// 		<strong>Logradouro: </strong>
						// 		<p>
						// 			{d.endereco}
						// 		</p>
								
						// 	</div>
						// 	<div>
						// 		<strong>Cidade: </strong>
						// 		<p>
						// 			{d.cidade}
						// 		</p>
								
						// 	</div>
						// 	<div>
						// 		<strong>Estado: </strong>
						// 		<p>
						// 			{d.estado}
						// 		</p>
								
						// 	</div>
						// 	<div>
						// 		<strong>Pais: </strong>
						// 		<p>
						// 			{d.pais}
						// 		</p>
								
						// 	</div>
						// 	{d.site &&
						// 		<div>
						// 			<strong>Website: </strong>
						// 			<p>
						// 				{d.site}
						// 			</p>
									
						// 		</div>
						// 	}
						// 	{d.descricao &&
						// 		<div>
						// 			<strong>Descrição: </strong>
						// 			<p>
						// 				{d.descricao}
						// 			</p>
												
						// 		</div>
								
						// 	}
						// </li>	
						<Item 
							
							index={index} 
							nome={d.nome} 
							endereco={d.endereco}
							cidade={d.cidade}
							estado={d.estado}
							pais={d.pais}
							site={d.site}
							descricao={d.descricao}	
						/>				
					))}

				</ul>
				
			</div>
		</>
	)
}

export default Frontend;
