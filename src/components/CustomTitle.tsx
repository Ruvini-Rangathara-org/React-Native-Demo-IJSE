//with parameters

//define props
import {Text} from "react-native";

interface CustomTitleProps {
    title: string;
    subtitle: string;
    color: string;
    fontsize: number;
    subcolor: string;

}

export const CustomTitle = (props:CustomTitleProps) => {
    return (
        <>
            {/*//apply all props*/}
            <Text style={{color: props.color, fontSize: props.fontsize}}>{props.title}</Text>
            <Text style={{color:props.subcolor}}>{props.subtitle}</Text>
        </>
    );
}