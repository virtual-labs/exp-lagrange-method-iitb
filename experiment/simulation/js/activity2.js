function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find f''(x)</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f(x) = f_0\\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} + f_1\\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} + f_2\\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} $$</span></p>

        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f'(x) = f_0\\frac{2x - x_1 - x_2}{(x_0 - x_1)(x_0 - x_2)} + f_1\\frac{2x - x_0 - x_2}{(x_1 - x_0)(x_1 - x_2)} + f_2\\frac{2x - x_0 - x_1}{(x_2 - x_0)(x_2 - x_1)} $$</span></p>

        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f''(x) = \\frac{2f_0}{(x_0 - x_1)(x_0 - x_2)} + \\frac{2f_1}{(x_1 - x_0)(x_1 - x_2)} + \\frac{2f_2}{(x_2 - x_0)(x_2 - x_1)} $$</span></p>
        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f''(x) = f_0L''_0 + f_1L''_1 + f_2L''_2 $$</span></p>

        <br>

        <p style='text-align: center; font-size: 18px;'>Find <span style='display: inline-block;' >$$ f''(x) $$</span></p>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ L''_0 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='l21-inp' > <span id='l21-val-sp'></span></div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ L'_1 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='l22-inp' > <span id='l22-val-sp'></span></div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ L''_2 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='l23-inp' > <span id='l23-val-sp'></span></div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ f''(x) = f_0L''_0 + f_1L''_1 + f_2L''_2 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f2-inp' > <span id='f2-val-sp'></span></div>
    
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a2();'  id='temp-btn-20' >Verify</button></div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    internal_calculations1();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    l20 = (2) / ((X[0] - X[1]) * (X[0] - X[2]));
    l21 = (2) / ((X[1] - X[0]) * (X[1] - X[2]));
    l22 = (2) / ((X[2] - X[0]) * (X[2] - X[1]));
    f2 = Y[0] * l20 + Y[1] * l21 + Y[2] * l22;
}
function verify_a2() {
    let btn = document.getElementById('temp-btn-20');
    console.log(`l0 => ${l20}, l1 => ${l21}, l2 => ${l22}, y = ${f2}`);
    let inp = document.getElementById('l21-inp');
    let sp = document.getElementById('l21-val-sp');
    let inp1 = document.getElementById('l22-inp');
    let sp1 = document.getElementById('l22-val-sp');
    let inp2 = document.getElementById('l23-inp');
    let sp2 = document.getElementById('l23-val-sp');
    let inp3 = document.getElementById('f2-inp');
    let sp3 = document.getElementById('f2-val-sp');
    if (!verify_values(parseFloat(inp.value), l20)) {
        alert('L0 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), l21)) {
        alert('L1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), l22)) {
        alert('L2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), f2)) {
        alert("f''(x) value is incorrect, calculate again.");
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${l20.toFixed(2)}`;
    inp1.remove();
    sp1.innerText = `${l21.toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${l22.toFixed(2)}`;
    inp3.remove();
    sp3.innerText = `${f2.toFixed(2)}`;
    alert('Your entered values are correct!!');
}
//# sourceMappingURL=activity2.js.map