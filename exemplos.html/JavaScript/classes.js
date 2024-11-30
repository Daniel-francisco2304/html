class Pessoa {
   constructor (nome, idade){
        this.nome = nome
        this.idade = idade
   }
   saldacoes(){
        console.log(`O nome é ${this.nome} e a idade é ${this.idade}`)
   }
   verificar_maior_idade(){
        if (this.idade >= 18){
            console.log("Você é maior de idade!!")
        } else { console.log("Você é menor de idade!")}
   }
   alterar_nome(novo_nome){
        this.nome = novo_nome
        console.log(`Nome alterado com sucesso para ${this.nome}`)
   }
}

let pessoa1 = new Pessoa("Maria",18)
pessoa1.saldacoes();
pessoa1.verificar_maior_idade();
pessoa1.alterar_nome("pedro pallo");
pessoa1.saldacoes();