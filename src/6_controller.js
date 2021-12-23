
$btnGo.addEventListener('click', refresh);
const P = permutations;
function refresh() {

    // P(M, k)  => 
    let body = "return " + 
        $expr.value
        .replace('M', '"' + inputA.value + '"')
        .replace('P', 'permutations')
        .replace('A', 'allocations')
        .replace('C', 'combinations')
    const func = new Function ("", body);
    let answer = func();
    $exprRes.innerHTML = answer.length;
    //$oper.value = answer;
    draw(answer);
}





