
import crypto from "crypto";    // Módulo interno (nativo)
import bcrypt from "bcrypt";    // Módulo externo (precisa instalar)

const senha = "senha123";

// Criação de um Hash SHA-256 e SHA-512
const sha256Hash = crypto.createHash("sha256").update(senha).digest("hex");
// console.log("Hash SHA-256:", sha256Hash);

// Criação de um HMAC (Hash-based Message Authentication Code)
const palavraSecreta = "GeraçãoTech";
const hmac = crypto.createHmac("sha256", palavraSecreta).update(senha).digest("hex");
// console.log("HMAC SHA-256:", hmac);

// Criando Hash com BCrypt
const saltRounds = 10;

// Cria um Hash (criptografia)
async function createHash(senha) {
    return bcrypt.hash(senha, saltRounds);
}

// Comparo dois Hashs
async function comparaHash(senhaInformada, hashGerado) {
    return await bcrypt.compare(senhaInformada, hashGerado);
}

// Gera a primeira senha (para guardar no DB, por exemplo)
const hashGerado = await createHash(senha);
console.log("Hash gerado: ", hashGerado);   // LOG

// Usuário informa uma senha no formulário (simulado)
const senhaInformada = "senha123";

// Tenta fazer Login
const resultado = await comparaHash(senhaInformada, hashGerado);

if (resultado) {
    console.log("Login efetuado com sucesso!");
} else {
    console.log("A senha está incorreta");
}
