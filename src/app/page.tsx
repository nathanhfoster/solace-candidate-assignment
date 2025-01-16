import { AdvocateResponse } from "@/db/schemas/advocates/types";
import { Advocate } from "@/db/schemas/advocates/types";
import AdvocateTable from "./views/AdvocateTable";

// This is a server-side component
async function fetchAdvocates(): Promise<Advocate[]> {
  const res = await fetch("http://localhost:3000/api/advocates"); // Adjust URL based on your setup
  const data: AdvocateResponse = await res.json();
  return data.data;
}

export default async function Home() {
  const advocates = await fetchAdvocates();

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <AdvocateTable advocates={advocates} />
    </main>
  );
}
