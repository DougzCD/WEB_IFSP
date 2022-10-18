
const sla = 7;

const Soma = (x, y)=>{
    return Number(x + y);
}

const Menos = (x,y)=>{
    return Number(x - y);
}

const math = {
    Soma: Soma,
    Menos: Menos,
    sla: sla
}

module.exports = math;