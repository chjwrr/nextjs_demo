// @ts-ignore
const fs = require('fs');
const path = 'src/pages/'
let files = fs.readdirSync(path);
// console.log(files)

function isTsx(filename:string):boolean {
    return ["tsx"].includes(filename.slice(-3))
}
resetFileContent(path,files)
function resetFileContent(path:string,files:any){
    for (let i=0,len=files.length;i<len;i++){
        const data = files[i]
        if(fs.statSync(path+data).isDirectory()){
            resetFileContent(path+data+'/',fs.readdirSync(path+data+'/'))
        }else if(isTsx(data)){
            // console.log(path+data)
            const enJson = fs.readFileSync("public/locales/en.json").toString()
            // console.log(enJson)
            const enData = JSON.parse(enJson)
            const enKeys = Object.keys(enData)
            let content = fs.readFileSync(path+data).toString()
            // console.log(content)
            // const decodeContent = content.replace(/(\n|\r|\r\n|↵|\s{2,})/g,'')
            for(let i=0,len=enKeys.length;i<len;i++){
                content = content.replace(new RegExp(`(\n|\r|\r\n|↵|\s{2,}|>|\s>)(${enData[enKeys[i]]})(\n|\r|\r\n|↵|\s{2,}|<|\s<)`,"g"),`$1{t("${enKeys[i]}")}$3`)
            }
            // console.log(content)
            fs.writeFileSync(path+data,content)
            console.log(path+data)
        }
    }
}
console.log(`执行language命令完成✅`)
