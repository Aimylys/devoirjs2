const API_URL = 'https://s3-4668.nuage-peda.fr/devoirpjjs2/api/clients';

async function getClients(page = 1){
    try{
        const response = await fetch(`${API_URL}?page=${page}?page=1&order%5Bnom%5D=asc&order%5Bprenom%5D=asc`);
        if(!response.ok){
            throw new Error('Erreur :'+ response.statusText);
        }
        const data = await response.json();
        return data;
    }
    catch(erreur){
        console.error('Erreur lors de la récupération: ',erreur);
        throw erreur;
    }
}

export{getClients}
//va exporter la fonction pour autaurisé celle-ci a être uitilisé dans un autre fichier que api_message.js