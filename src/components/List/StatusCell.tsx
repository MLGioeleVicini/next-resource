import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Localizations, PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function getLocalizations(){
  return await prisma.localizations.findMany()
}

const StatusCell = async ({ getValue, row, column, table }) => {
  const { name, color } = getValue() || {};
  const { updateData } = table.options.meta;

  const localizations: Array<Localizations> = await prisma.localizations.findMany()

  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton
        h="100%"
        w="100%"
        textAlign="left"
        p={1.5}
        bg={color || "transparent"}
        color="gray.900"
      >
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => updateData(row.index, column.id, null)}>
        </MenuItem>
        {localizations.map((localization) => (
          <MenuItem
            onClick={() => updateData(row.index, column.id, localization)}
            key={localization.id_localization}
          >
            {localization.localization_title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default StatusCell;
