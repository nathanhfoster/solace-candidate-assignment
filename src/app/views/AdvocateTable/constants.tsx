import { ColumnConfig } from "@/app/components/common/Table/types";
import { Advocate } from "@/db/schemas/advocates/types";

export const CONFIG_ADOVCATES_TABLE: ColumnConfig<Advocate>[] = [
  {
    key: "id",
    render: (rowData) => rowData.id,
    title: "ID",
    width: 80,
  },
  {
    key: "firstName",
    render: (rowData) => rowData.firstName,
    title: "First Name",
    width: 200,
  },
  {
    key: "lastName",
    render: (rowData) => rowData.lastName,
    title: "Last Name",
    width: 200,
  },
  {
    key: "city",
    render: (rowData) => rowData.city,
    title: "City",
  },
  {
    key: "degree",
    render: (rowData) => rowData.degree,
    title: "Degree",
    width: 100,
  },
  {
    key: "specialties",
    render: (rowData) => (
      <ul key={rowData.id}>
        {rowData.specialties.map((specialty, index) => (
          <li key={index}>{specialty}</li>
        ))}
      </ul>
    ),
    title: "Specialties",
    width: 600,
  },
  {
    key: "yearsOfExperience",
    render: (rowData) => rowData.yearsOfExperience,
    title: "Years",
    width: 80,
  },
  {
    key: "phoneNumber",
    render: (rowData) => rowData.phoneNumber,
    title: "Phone",
    width: 140,
  },
  {
    key: "createdAt",
    render: (rowData) => new Date(rowData.createdAt).toLocaleDateString(),
    title: "Created",
    width: 80,
  },
];
