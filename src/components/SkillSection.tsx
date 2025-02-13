import { Badge, Title, Table } from "@mantine/core";
import { skills } from "../data";

const SkillSection = () => {
    return  (<>
    <Title order={3}>Skills</Title>
    <Table>
        <tbody>{Object.keys(skills).map((key)=>{
            return <tr key={key}><td>{key}</td><td>{skills[key].map((skill)=>{
                    return <Badge key={skill} variant="outline" mr={3} color="blue.5">{skill}</Badge>
                })}</td></tr>
        })}</tbody>
    </Table>
    </>);
}

export default SkillSection;