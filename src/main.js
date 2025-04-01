
class Escola{

    constructor(aluno, nota){
        this.aluno = aluno;
        this.nota = nota;
    }

}

// Instâncias do objeto
const Alfredo = new Escola('Alfredo', 7);
const Erika = new Escola('Erika', 3);
const Nicolas = new Escola('Nicolas', 10);
const Enrico = new Escola('Enrico', 10);

// Objetos em dicionário
const mapAlunos = new Map();
mapAlunos.set(Alfredo.aluno, Alfredo.nota);
mapAlunos.set(Erika.aluno, Erika.nota);
mapAlunos.set(Nicolas.aluno, Nicolas.nota);
mapAlunos.set(Enrico.aluno, Enrico.nota);


// console.log(mapAlunos);

// Dicionário em Array

const arrayAlunos = [...mapAlunos];
// console.log(arrayAlunos);


// Função para calcular nota acima da média
const notaAcimaDaMedia = (nome, nota) => {
    if (nota >= 6){
        console.log(`O aluno ${nome} passou de ano`);
    }
    
};

for (let i = 0; i < arrayAlunos.length; i++){
    // console.log(arrayAlunos[i][1]);
    const nomesDosAlunos = arrayAlunos[i][0];
    const notasDosAlunos = arrayAlunos[i][1];
    notaAcimaDaMedia(nomesDosAlunos, notasDosAlunos);

}


