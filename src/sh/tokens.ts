// @ts-ignore
import tokensFS from 'fs'

let tokensFiles = tokensFS.readdirSync('src/assets/tokens');

function isTokenPic(filename:string):boolean {
    return ["png","jpg","svg"].includes(filename.slice(-3))
}
let str = ""
const arr = []
for (let i=0,len=tokensFiles.length;i<len;i++){
    const data = tokensFiles[i]
    if(isTokenPic(data)){
        const noType = data.slice(0,-4)
        str += `import ${noType} from './${data}';`
        str += "\r\n"
        arr.push(noType)
    }
}
str += "\r\n"
str += `const ImageToken:any = {`
str += "\r\n"
str += arr.join(",\r\n")
str += "\r\n"
str += `}`
str += "\r\n"
str += `export default ImageToken;`
//把处理后的数据写入文件
tokensFS.writeFileSync('src/assets/tokens/ImageToken.ts',str)
console.log(`执行tokens命令完成✅`)
console.log(`总共${arr.length}张图片`)
