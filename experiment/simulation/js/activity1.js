let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Differentiation Method Based on Interpolation (Lagrange's Method)</h5>
        <p>Learning Objective: Find f'(x)</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div id='a1-tab' ></div>

        <br>

        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f(x) = f_0L_0 + f_1L_1 + f_2L_2 $$</span></p>
        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f(x) = f_0\\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} + f_1\\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} + f_2\\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} $$</span></p>

        <br>

        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f'(x) = f_0\\frac{2x - x_1 - x_2}{(x_0 - x_1)(x_0 - x_2)} + f_1\\frac{2x - x_0 - x_2}{(x_1 - x_0)(x_1 - x_2)} + f_2\\frac{2x - x_0 - x_1}{(x_2 - x_0)(x_2 - x_1)} $$</span></p>
        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f'(x) = f_0L'_0 + f_1L'_1 + f_2L'_2 $$</span></p>

        <br>

        <p style='text-align: center; font-size: 18px;'>Find <span style='display: inline-block;' >$$ f'(x) $$</span></p>
        <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ x = ${x} $$</span></p>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ L'_0 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='l1-inp' > <span id='l1-val-sp'></span></div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ L'_1 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='l2-inp' > <span id='l2-val-sp'></span></div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ L'_2 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='l3-inp' > <span id='l3-val-sp'></span></div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ f'(x) = f_0L'_0 + f_1L'_1 + f_2L'_2 \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f1-inp' > <span id='f1-val-sp'></span></div>
    
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    show_xy();
    internal_calculations0();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations0() {
    l10 = (2 * x - X[1] - X[2]) / ((X[0] - X[1]) * (X[0] - X[2]));
    l11 = (2 * x - X[0] - X[2]) / ((X[1] - X[0]) * (X[1] - X[2]));
    l12 = (2 * x - X[0] - X[1]) / ((X[2] - X[0]) * (X[2] - X[1]));
    f1 = Y[0] * l10 + Y[1] * l11 + Y[2] * l12;
}
function show_xy() {
    let div = document.getElementById('a1-tab');
    let header = ['x'];
    tb_data = [['f(x)']];
    for (let i = 0; i < 3; i++) {
        header.push(` x<sub>${i}</sub> = ${X[i]}`);
        tb_data[0].push(`f<sub>${i}</sub> = ` + Y[i]);
    }
    let tb = new Display_Table(header, tb_data, div);
    tb.load_table();
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`l0 => ${l10}, l1 => ${l11}, l2 => ${l12}, y = ${f1}`);
    let inp = document.getElementById('l1-inp');
    let sp = document.getElementById('l1-val-sp');
    let inp1 = document.getElementById('l2-inp');
    let sp1 = document.getElementById('l2-val-sp');
    let inp2 = document.getElementById('l3-inp');
    let sp2 = document.getElementById('l3-val-sp');
    let inp3 = document.getElementById('f1-inp');
    let sp3 = document.getElementById('f1-val-sp');
    if (!verify_values(parseFloat(inp.value), l10)) {
        alert('L0 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), l11)) {
        alert('L1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), l12)) {
        alert('L2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), f1)) {
        alert("f'(x) value is incorrect, calculate again.");
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${l10.toFixed(2)}`;
    inp1.remove();
    sp1.innerText = `${l11.toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${l12.toFixed(2)}`;
    inp3.remove();
    sp3.innerText = `${f1.toFixed(2)}`;
    alert('Your entered values are correct!!');
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map