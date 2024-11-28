// trapazium ----------------------------------------------------------------
let tb_data = [];
let tb2_data = [];
let l10 = 0;
let l11 = 0;
let l12 = 0;
let f1 = 0;
let l20 = 0;
let l21 = 0;
let l22 = 0;
let f2 = 0;
let I_val = 0;
//all variables
let X = [];
function initialize_X() {
    let ini = Math.round(Math.random() * 3 + 1);
    X = [ini, ini + 1, ini + 2];
}
initialize_X();
let Y = [];
let y = Y[0];
let x = X[0] + 0.5;
console.log(`x => ${x}`);
let x_ex = X[0] - 0.5;
console.log(`x_ex => ${x_ex}`);
for (let i = 0; i < X.length; i++) {
    Y.push((Math.pow(X[i], 4)) + Math.round(Math.random() * 5 + 5));
}
function load_tb2() {
    for (let i = 0; i < 4; i++) {
        tb2_data.push([`X<sub>${i + 1}</sub> = ` + X[i], Y[i]]);
    }
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) {
            if (i < 3 - j) {
                tb2_data[i].push(tb2_data[i + 1][1 + j] - tb2_data[i][1 + j]);
            }
            else {
                tb2_data[i].push('-');
            }
        }
    }
    console.log(tb2_data);
}
load_tb2();
//# sourceMappingURL=data.js.map