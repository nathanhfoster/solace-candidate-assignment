import { FC } from "react";
import { TableProps } from "./types";

const Table: FC<TableProps> = ({ data, config }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((c) => (
            <th
              key={String(c.key)}
              style={{ textAlign: "left", width: c.width }}
            >
              {c.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.id}>
            {config.map((c, i) => {
              const cellValue = entry[c.key as keyof typeof entry];

              const renderedValue = c.render
                ? c.render(entry, i, data)
                : cellValue !== undefined && cellValue !== null
                ? String(cellValue)
                : "-";

              return (
                <td key={String(c.key)} title={c.title}>
                  {renderedValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
