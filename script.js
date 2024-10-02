import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "report.html": htmlReport(data),
    };
  }

// Configurações de execução do teste
export let options = {
    vus: 50, // Número de usuários virtuais
    duration: '30s', // Duração do teste
};

// ID da API
const API_KEY = 'live_yfqUmcgxWr1UJtPWcAoEV9BzRkhVoG7lbNxgZqiIT6yJ6bXrhJtYAvZWsuJT4MYT';

export default function () {
    // Teste 1: Listar Raças de Cachorros
    let res1 = http.get('https://api.thedogapi.com/v1/breeds');
    check(res1, {
        'status is 200': (r) => r.status === 200,
    });

    // Teste 2: Obter Informações de uma Raça Específica
    let breedId = '1'; // ID da raça para consulta
    let res2 = http.get(`https://api.thedogapi.com/v1/breeds/${breedId}`);
    check(res2, {
        'status is 200': (r) => r.status === 200,
    });

    // Teste 3: Buscar Imagens Aleatórias de Cães
    let params = {
        headers: {
            'x-api-key': API_KEY

            ,
        },
    };
    let res3 = http.get('https://api.thedogapi.com/v1/images/search?limit=5', params);
    check(res3, {
        'status is 200': (r) => r.status === 200,
    });

    // Teste 4: Cadastro de Votos em Imagens de Cães
    let votePayload = JSON.stringify({
        image_id: 'abc123', // ID de uma imagem de cão
        sub_id: 'user123',
        value: 1,
    });
    let res4 = http.post('https://api.thedogapi.com/v1/votes', votePayload, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY

            ,
        },
    });
    check(res4, {
        'status is 201': (r) => r.status === 201,
    });

    // Teste 5: Deletar um Voto Existente
    let voteId = '12345'; // ID do voto a ser removido
    let res5 = http.del(`https://api.thedogapi.com/v1/votes/${voteId}`, null, {
        headers: {
            'x-api-key': API_KEY

            ,
        },
    });
    check(res5, {
        'status is 200': (r) => r.status === 200,
    });

    // Teste 6: Buscar Imagens Filtradas por Raça
    let res6 = http.get('https://api.thedogapi.com/v1/images/search?breed_id=1&limit=3', params);
    check(res6, {
        'status is 200': (r) => r.status === 200,
    });



    sleep(1); // Aguarda 1 segundo entre as requisições
}
