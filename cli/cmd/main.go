package main

import (
    "fmt"
    "os"
    "bufio"
    "strings"
    "github.com/resend/resend-go/v2"
)

type Task struct {
    username string ;
    task string;
    file string;
    line_number int;
}

func main() {
    const apiKey = "re_diWHoiFr_Py66yCzsJxrEuNE3VNP5byJ7"

    client := resend.NewClient(apiKey)

    if len(os.Args) < 2{
        panic("file name is needed!");
    }
    fileName := os.Args[1:][0];
    file, err := os.Open(fileName);
    if err != nil { 
        panic(err); 
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
                next_space_index := strings.Index(sub_comment_str, " ");//@teal.client please check variable name
                name := sub_comment_str[0:next_space_index];
                task := sub_comment_str[next_space_index + 1:];

                task_obj := Task{
                    username: name,
                    task:     task,
                    file:     fileName,
                    line_number: line_number,
                }
            params := &resend.SendEmailRequest{
                From:    "onboarding@resend.dev",
                To:      []string{"teal.client@gmail.com"},
                Subject: "A task has been assigned to you!",
                Html:    "<p>Recently as task has been assigned to you in a file" + task_obj.file + "<strong> " + task_obj.task + " </strong>!</p>",
            }

                sent, err := client.Emails.Send(params)
                fmt.Println("@", task_obj.username," -> " ,task_obj.task);
            }
        }

    }

    if err := scanner.Err(); err != nil {
        panic("There is some error!");
    }
}
