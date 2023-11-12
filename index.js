const express = require('express')
const bodyParser = require('body-parser')

const app = express()
let chocolateList = []
let chocolateID = 0

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

const port = 3000
app.listen(port,()=>{
    console.log(`O servidor está ativo na porta ${port}`)
})

app.get('/home',(req, res)=>{
    res.sendFile(__dirname + '/Front/index.html')
})

app.get('/cadastrar', (req, res) =>{
    res.sendFile(__dirname + '/Front/cadastro.html')
})

app.get('/showItem', (req, res) =>{
    res.sendFile(__dirname + '/Front/showItem.html')
})

app.post('/cadastrochocolate', (req, res) => {
    const {nome} = req.body;

    const newChocolate = {
        id: chocolateID,
        nome: nome
    }

    chocolateList.push(newChocolate)
    chocolateID++;

    res.json({chocolateList})   
})

app.get('/chocolates', (req, res) => {
    const listOfNames = chocolateList.map(chocolate => chocolate.nome)
    res.json({chocolateNames: listOfNames})
})

app.put('/chocolates/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    const chocolateIndex = chocolateList.findIndex(chocolate => chocolate.id === id);

    if (chocolateIndex !== -1) {
        chocolateList[chocolateIndex].nome = nome;
        res.json({ message: `Chocolate com ID ${id} foi atualizado com sucesso.` });
    } else {
        res.status(404).json({ error: `Chocolate com ID ${id} não encontrado.` });
    }
});

app.delete('/chocolates/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const initialLength = chocolateList.length;
        chocolateList = chocolateList.filter(chocolate => chocolate.id !== id);

        if (chocolateList.length < initialLength) {
            res.json({ message: `Item deletado com sucesso.` });
        } else {
            res.status(404).json({ error: `Item não encontrado` });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar o chocolate." });
    }
});



