const fs = require("fs");
const {Command} = require("commander");
const program = new Command;

program
    .name("Counter")
    .description("Counts the number of words and lines in  a file")
    .version("0.0.0");

program.command("count")
    .description("Counts the number of words in a file")
    .argument('<file>', 'file to count')
    .action((fileName) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if(err){
                console.log(err);
            }
            else{
                let count = 0;
                for(let i = 0; i < data.length; i++){
                    if(data[i] == " "){
                        count++;
                    }
                }
                console.log(`There are ${count + 1} words in ${fileName}`);
            }
        })
    })

program.command("count_lines")
    .description("Counts the number of lines in a file")
    .argument('<file>', 'file to count')
    .action((fileName) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if(err){
                console.log(err);
            }
            else{
                let count = 0;
                for(let i = 0; i < data.length; i++){
                    if(data[i] == "\n"){
                        count++;
                    }
                }
                console.log(`There are ${count} lines in ${fileName}`);
            }
        })
    })

    program.parse();