// 整数の十進数からr進数へ変換する
function x2r(x, r) {
    let ret = 0;
    let retArr = [];
    
    let p = x; // 商
    let q = 0; // 余り
    
    do {
        x = p;
        
        if (x != 0) {
            p = Math.floor(x / r);
            q = x % r;
        }
        
        retArr.push(q);
    } while (p != 0);
    
    ret = retArr.reverse().join('');
    
    return ret;
}