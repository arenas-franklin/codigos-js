// codigo de arvore Binária em JS usando recursividade 
// Um ato de uma função invocando a si mesma. A recursão é usada para resolver problemas que contêm subproblemas menores. Uma função recursiva pode receber dois inputs (entradas): um caso base (termina a recursão) ou um caso recursivo (continua a recursão



let arvore ={
    left:{
        left:undefined,
        right:{
            value:3
        },
        value:2
    },
    right:undefined,
    value:10
};

function preOrder(tree){
    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}

function inOrder(tree){
    tree.left && inOrder(tree.left);
    console.log(tree.value);
    tree.right && inOrder(tree.right);
}

function posOrder(tree){
    tree.left && posOrder(tree.left);
    tree.right && posOrder(tree.right);
    console.log(tree.value)
}


console.log('preOrder');
preOrder(arvore);

console.log('inOrder');
inOrder(arvore);

console.log('posOrder');
posOrder(arvore);