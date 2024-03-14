
const mediaAluno = gets();

if (mediaAluno >= 7) {
    print('Aprovado');
}
else if (mediaAluno >= 5 && mediaAluno <=7) {
    print('Recuperção');    
}else {
    print('Reprovado');
}
