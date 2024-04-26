import { Resources } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Resources>[] =[
  {
    header: "ID",
    accessorKey: "id_resources",
  },
  {
    header: "Resource Key",
  accessorKey: "resource_key",
  },
  {
    header: "Resource Value",
    accessorKey: "resource_value",
  }
]