
function permutations(str)
{
   if (str.length == 1)
      return [str];
   var arr = [];
   for (let i = 0; i < str.length; i++)
   {
      let s = str.slice(0, i) + str.slice(i + 1);
      for (let perm of permutations(s))
            arr.push(str[i] + perm);
   }
   return arr;
}

function combinations(str, k)
{
   if (k == 1)
      return str.split('');
   var arr = [];
   for (let i = 0; i < str.length; i++)
   {
      let s = str.slice(i + 1);
      for (let comb of combinations(s, k-1))
            arr.push(str[i] + comb);
   }
   return arr;
}

function allocations(str, k)
{
   if (k == 1)
      return str.split('');
   var arr = [];
   for (let i = 0; i < str.length; i++)
   {
    let s = str.slice(0, i) + str.slice(i + 1);
      for (let alloc of allocations(s, k-1))
            arr.push(str[i] + alloc);
   }
   return arr;
}


console.log(permutations("abc"))  
console.log(allocations("abc", 3))  
console.log(combinations("abcde", 3))  