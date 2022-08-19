function introduction(name) {
    `return Hi, my name is ${name}`
}

introduction(Ali)
function introduction(name) {
    console.log(`Hi, my name is ${name}`)
}

introduction("Ali")

function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`)

}

introductionWithLanguage("Ali", "Javascript")

function introductionWithLanguageOptional(name, language="Javascript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`)
}

introductionWithLanguageOptional("Ali", )
