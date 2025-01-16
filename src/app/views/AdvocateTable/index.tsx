"use client";

import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Advocate } from "@/db/schemas/advocates/types";
import { buttonStyle, containerStyle, inputStyle } from "./styles";
import Table from "@/app/components/common/Table";
import { CONFIG_ADOVCATES_TABLE } from "./constants";

type AdvocateProps = {
  advocates: Advocate[];
};

export default function AdvocateTable({ advocates }: AdvocateProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAdvocates, setFilteredAdvocates] =
    useState<Advocate[]>(advocates);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    const caseInsensitiveSearchTerm = newSearchTerm.toLowerCase();

    setSearchTerm(newSearchTerm);

    const filtered = advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(caseInsensitiveSearchTerm) ||
        advocate.lastName.toLowerCase().includes(caseInsensitiveSearchTerm) ||
        advocate.city.toLowerCase().includes(caseInsensitiveSearchTerm) ||
        advocate.degree.toLowerCase().includes(caseInsensitiveSearchTerm) ||
        advocate.specialties.some((s) =>
          s.toLowerCase().includes(caseInsensitiveSearchTerm)
        ) ||
        advocate.yearsOfExperience
          .toString()
          .includes(caseInsensitiveSearchTerm)
      );
    });

    setFilteredAdvocates(filtered);
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = (_e) => {
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return (
    <div>
      <div style={containerStyle}>
        <input
          style={inputStyle}
          onChange={onChange}
          value={searchTerm}
          placeholder="Search advocates"
        />
        <button onClick={onClick} style={buttonStyle}>
          Reset
        </button>
      </div>
      <br />
      <br />
      <Table data={filteredAdvocates} config={CONFIG_ADOVCATES_TABLE} />
    </div>
  );
}
