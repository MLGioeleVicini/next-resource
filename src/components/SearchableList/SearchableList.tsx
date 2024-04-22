import { PrismaClient, Resources } from "@prisma/client"
import { ColumnDef, createColumnHelper, useReactTable } from "@tanstack/react-table"
import { useState } from "react"

const prisma = new PrismaClient()

const SearchableList=()=>{

const [data,setData] =useState<Resources[]>([])
const columnHelper = createColumnHelper<Resources>()
const columns:ColumnDef<Resources>[] = [
columnHelper.accessor('id_resources',{
  cell: info=> info.getValue(),
}),
columnHelper.accessor('resource_key',{
  cell: info=> info.getValue(),
}),
]

const table = useReactTable({columns, data})

return <>
<div>

</div>
</>
}

export default SearchableList