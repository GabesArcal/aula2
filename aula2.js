    var vpays = [] // esse vetor está guardando todo o resultado da função

    function create_pay(pnomecartao, pbandeira, pnumero, pcvv){ // aqui é preciso que passe a mesma quantidade que esta dentro de parentes
        var opay = { // ô "o" significa "objeto"
            "nome":pnomecartao,
            "bandeira":pbandeira,
            "numero":pnumero,
            "cvv":pcvv
        }
        vpays.push(opay) // Ele joga pro vetor
    }

    create_pay("Gabriel L D","Mastercard","125.487.549-87",310)

    console.log(vpays)

    app.post('/pay', (req, res) => {

        //let nome = req.body.nome;
        //let idade = req.body.idade;
        //let genero = req.body.genero;

        let{ genero, idade, nome} = req.body

        create_pay(genero, idade, nome)

        return res.status(201).json({  // Essa linha significa que apoś o usuario finalizar algum formulado é para aparecer uma mensagem como erro 404 quando errado e 201 quando criado.
            message: "Usuario criado",
            // db: vpays // Esse é o banco que você está dando resposta. (Ira mostrar)
        })
    }) // req = requisição e res = resposta | Isso funciona quando o usuario precisa de uma confirmação no banco de dados fazendo um req e recebendo um res.


    //app.get( '/pay' ) não pode haver dois exatamente iguais pois da erro
    app.get( '/pay', (req, res) =>{
        return res.status(200).json({ // Status 200 se usa quase 90% das vezes
            message: "Todos usuários",
            db: vusers
        })
    })


    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
