import React from "react";
import Image from "next/image";

import * as s from "./style";

function PersonCard({ person }: { person: any }) {
  const personDescription = person.description || "";

  return (
    <s.PersonItem>
      <s.PersonHeader>
        <s.PersonPicture>
          <Image
            src={person?.image?.url}
            alt={`Foto de ${person.name}`}
            width="100"
            height="100"
          />
        </s.PersonPicture>

        <s.PersonInfo>
          <s.PersonName>{person?.name}</s.PersonName>
          <s.PersonJob>{person?.role}</s.PersonJob>
        </s.PersonInfo>

        <s.PersonIcon src="/icons/unbox.png" alt={`Ícone de ${person.name}`} />
      </s.PersonHeader>

      <s.PersonDescription
        dangerouslySetInnerHTML={{
          __html: personDescription.replace(/\n/g, "<br />"),
        }}
      ></s.PersonDescription>
    </s.PersonItem>
  );
}

export default PersonCard;
