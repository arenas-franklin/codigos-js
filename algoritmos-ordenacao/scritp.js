let array_length;
// cria o valor maximo do array*/

function heap_root(input, i){
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if(left < array_length && input[left] > input[max] ){
        max = left;
    }

    if(right < array_length && input[left] > input[max]){
        max = left;
    }

    if(right < array_length && input[right] > input[max]){
        max = right;
    }

    if(max != i){
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B){
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input){
    array_length = input.length;

    for(let i = Math.floor(array_length / 2); i >= 0; i -=1){
        heap_root(input,i);
    }

    for(i = input.length - 1 ; i > 0; i--){
        swap(input, 0 , i);
        array_length--;

        heap_root(input,0);
    }

}


let arr = [3,0,2,5,-1,4,1];
console.log(arr);
heapSort(arr);
console.log(arr);