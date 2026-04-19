let a = 1.0, b = 0.0;

function update() {
    // คำนวณความน่าจะเป็นจริงตามหลักฟิสิกส์
    const p0 = Math.pow(a, 2), p1 = Math.pow(b, 2);
    
    // UI Update
    document.getElementById('bar0').style.height = (p0 * 100) + '%';
    document.getElementById('bar1').style.height = (p1 * 100) + '%';
    document.getElementById('p0').innerText = (p0 * 100).toFixed(1) + '%';
    document.getElementById('p1').innerText = (p1 * 100).toFixed(1) + '%';
    
    const s = b < 0 ? '-' : '+';
    document.getElementById('state-vec').innerText = 
        `|ψ⟩ = ${Math.abs(a).toFixed(2)}|0⟩ ${s} ${Math.abs(b).toFixed(2)}|1⟩`;
}

function gate(type) {
    if (type === 'X') { [a, b] = [b, a]; } 
    else if (type === 'H') {
        const r = 1 / Math.sqrt(2);
        const newA = (a + b) * r;
        const newB = (a - b) * r;
        [a, b] = [newA, newB];
    }
    update();
}

function reset() { a = 1.0; b = 0.0; update(); }
