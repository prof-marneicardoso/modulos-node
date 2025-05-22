
import path from "path";

// Manipulação de caminhos
// const dirName = path.dirname("/path/to/file.txt"); // exemplo (sintaxe)
const dirName = path.dirname("/pasta1/teste.txt");
const baseName = path.basename("/pasta1/teste.txt");
const extName = path.extname("/pasta1/teste.txt");
const joinPath = path.join("/pasta1", "teste.txt");
const resolvePath = path.resolve("teste.txt");

console.log("Diretório:", dirName);
console.log("Nome do Arquivo:", baseName);
console.log("Extensão do Arquivo:", extName);
console.log("Caminho Combinado:", joinPath);
console.log("Caminho Absoluto:", resolvePath);
