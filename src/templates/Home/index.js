import PersonCard from "components/PersonCard";
import * as s from "./style";

export default function HomeTemplate({ members }) {
  return (
    <s.PeopleList>
      {members.map((member) => {
        return <PersonCard person={member} key={member?.id} />;
      })}
    </s.PeopleList>
  );
}
