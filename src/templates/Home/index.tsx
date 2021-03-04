import { people } from "helpers/people";

import PersonCard from "components/PersonCard";

import * as s from "./style";

export default function HomeTemplate() {
  return (
    <s.PeopleList>
      {people.map((person, personKey) => {
        return <PersonCard person={person} key={`unbox-people-${personKey}`} />;
      })}
    </s.PeopleList>
  );
}
