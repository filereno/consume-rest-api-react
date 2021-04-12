import React from 'react'

function Item(props) {
	console.log(props.index)
	return (
		
		<li key={props.index}>
			<div>
				<strong>Nome: </strong>
				<p>
					{props.nome}
				</p>	
			</div>
			<div>
				<strong>Logradouro: </strong>
				<p>
					{props.endereco}
				</p>
			</div>
			<div>
				<strong>Cidade: </strong>
				<p>
					{props.cidade}
				</p>
			</div>
			<div>
				<strong>Estado: </strong>
				<p>
					{props.estado}
				</p>
			</div>
			<div>
				<strong>Pais: </strong>
				<p>
					{props.pais}
				</p>
			</div>
			{props.site &&
				<div>
					<strong>Website: </strong>
					<p>
						{props.site}
					</p>
				</div>
			}
			{props.descricao &&
				<div>
					<strong>Descrição: </strong>
					<p>
						{props.descricao}
					</p>			
				</div>	
			}
		</li>
	)
}

export default Item