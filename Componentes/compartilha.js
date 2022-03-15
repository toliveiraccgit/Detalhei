function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'O título da sua página',
			text: 'Um texto de resumo',
			url: 'http://127.0.0.1:5500/perfil.html',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}
