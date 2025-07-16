package main

import (
    "fmt"
    "os"
    "bufio"
    "strings"
)

type Task struct {
    username string ;
    task string;
    file string;
    line_number int;
}

func main() {
    if len(os.Args) < 2{
        panic("file name is needed!");
    }
    fileName := os.Args[1:][0];
    file, err := os.Open(fileName);
    if err != nil { 
        panic(err);  //@dakshpanchhal please check this code to make sure it never crashes
    }
    defer file.Close();

    scanner := bufio.NewScanner(file)

    var line_number int = 0;
    for scanner.Scan(){
        line_number++;
        line := scanner.Text()

        if strings.Contains(line, "@") {
            if strings.Contains(line,"//") {

                start_tag_index := strings.Index(line, "@")
                sub_comment_str := line[start_tag_index + 1:];
                next_space_index := strings.Index(sub_comment_str, " ");//@vedantsinggh please check variable name
                name := sub_comment_str[0:next_space_index];
                task := sub_comment_str[next_space_index + 1:];

                task_obj := Task{
                    username: name,
                    task:     task,
                    file:     fileName,
                    line_number: line_number,
                }

                fmt.Println("@", task_obj.username," -> " ,task_obj.task);
            }
        }

    }

    if err := scanner.Err(); err != nil {
        panic("There is some error!");
    }
}
