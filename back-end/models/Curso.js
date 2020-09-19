const mongoose = require('mongoose')
//trazer o bd para a aplicação
const esquema = mongoose.Schema({ //Schema armazena metadados(informações da propria tabela) além dos dados axes que bd como mongoo armazena 
    nome: {
        type: String,
        required: true //true para ser obrigatorio - requirida
    },
    ementa: {
        type: String,
        required: true 
    },
    carga_horaria: {
        type: Number,
        required: true,
        min: 4,
        max: 80
    },
    nivel: {
        type: String,
        required: true,
        enum: ['Básico', 'Intermediário', 'Avançado']//conjunto de valores aceitos - enum
    },
    valor_curso: {
        type: Number,
        required: true,
        default: 450,    // Valor assumido se não for informado
        min: 50
    }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Curso', esquema, 'cursos')