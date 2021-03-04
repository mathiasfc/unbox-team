import React from "react";
import Image from "next/image";

import * as s from "./style";

function PersonCard({ person }: { person: any }) {
  const personDescription = person.description || "";

  return (
    <s.PersonItem>
      <s.PersonHeader>
        <s.PersonPicture>
          <s.Image
            src={person.picture}
            alt={`Foto de ${person.name}`}
            width="100"
            height="100"
          />
        </s.PersonPicture>

        <s.PersonInfo>
          <s.PersonName>{person.name}</s.PersonName>
          <s.PersonJob>{person.job}</s.PersonJob>
        </s.PersonInfo>

        <s.PersonIcon src={person.icon} alt={`Ícone de ${person.name}`} />
      </s.PersonHeader>

      <s.PersonDescription
        dangerouslySetInnerHTML={{
          __html: personDescription.replace(/\n/g, "<br />")
        }}
      ></s.PersonDescription>
    </s.PersonItem>
  );
}

export default PersonCard;
