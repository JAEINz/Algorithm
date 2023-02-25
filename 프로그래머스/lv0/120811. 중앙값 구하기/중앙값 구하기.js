function solution(array) {
    array.sort(function(a,b){
        return a-b
    })
    var aa = Math.ceil(array.length/2);
    var answer = array[aa-1]
    return answer;
}