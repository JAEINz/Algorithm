function solution(numbers) {
    var answer = numbers.reduce((a,b)=>{
        return a+b;
    });
    return answer/numbers.length;
}

    