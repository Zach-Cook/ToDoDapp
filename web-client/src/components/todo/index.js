import React from 'react';
import { TodoFrame, NewTaskFrame, Input,  Button, TaskFrame, 
    TaskItemFrame, CheckBox, Text, RemoveFrame, ContentFrame} from './styles/todo';

export default function Todo({children, ...restProps}){

    return <TodoFrame {...restProps}>{children}</TodoFrame>

}

Todo.NewTaskFrame = function NavigationNewTaskFrame({children, ...restProps}) {
    return <NewTaskFrame {...restProps}>{children}</NewTaskFrame>
}

Todo.Input = function NavigationInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

Todo.Button = function NavigationButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}



Todo.TaskFrame = function NavigationTaskFrame({children, ...restProps}) {
    return <TaskFrame {...restProps}>{children}</TaskFrame>
}

Todo.TaskItemFrame = function NavigationTaskItemFrame({children, ...restProps}) {
    return <TaskItemFrame {...restProps}>{children}</TaskItemFrame>
}

Todo.CheckBox = function NavigationCheckBox({children, ...restProps}) {
    return <CheckBox {...restProps}>{children}</CheckBox>
}

Todo.Text = function NavigationText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Todo.ContentFrame = function NavigationContentFrame({children, ...restProps}) {
    return <ContentFrame {...restProps}>{children}</ContentFrame>
}

Todo.RemoveFrame = function NavigationRemoveFrame({children, ...restProps}) {
    return <RemoveFrame {...restProps}>{children}</RemoveFrame>
}