
import os from "os";

// Informações sobre o Sistema Operacional (OS)
const arquitetura = os.arch();
// console.log("Sistema Operacional:", arquitetura);

const plataforma = os.platform();
// console.log("Plataforma:", plataforma);

const CPUs = os.cpus();
// console.log("Número de processadores:", CPUs.length);
// console.log("CPUs:", CPUs);

const RAM = os.totalmem();
console.log("Memória Total (Bytes):", RAM);
console.log("Memória Total (KB):", RAM / 1024);
console.log("Memória Total (MB):", (RAM / 1024 / 1024).toFixed(2));
console.log("Memória Total (GB):", (RAM / 1024 / 1024 / 1024).toFixed(1));

const freeRAM = os.freemem();
console.log("Memória Livre (Bytes):", freeRAM);
console.log("Memória Livre (KB):", freeRAM / 1024);
console.log("Memória Livre (MB):", (freeRAM / 1024 / 1024).toFixed(2));
console.log("Memória Livre (GB):", (freeRAM / 1024 / 1024 / 1024).toFixed(2));

// Interfaces de Rede
const rede = os.networkInterfaces();
console.log("Interfaces de Rede:", rede);

