import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import FilterIcon from "./icons/FilterIcon";
import { Localizations, PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function getLocalizations(){
  return await prisma.localizations.findMany()
}

const StatusItem = ({ status, setColumnFilters, isActive }) => (
  <Flex
    align="center"
    cursor="pointer"
    borderRadius={5}
    fontWeight="bold"
    p={1.5}
    bg={isActive ? "gray.800" : "transparent"}
    _hover={{
      bg: "gray.800",
    }}
    onClick={() =>
      setColumnFilters((prev) => {
        const statuses = prev.find((filter) => filter.id === "status")?.value;
        if (!statuses) {
          return prev.concat({
            id: "status",
            value: [status.id],
          });
        }

        return prev.map((f) =>
          f.id === "status"
            ? {
                ...f,
                value: isActive
                  ? statuses.filter((s) => s !== status.id)
                  : statuses.concat(status.id),
              }
            : f
        );
      })
    }
  >
    {status.name}
  </Flex>
);

const FilterPopover = async ({ columnFilters, setColumnFilters }) => {
  const filterStatuses =
    columnFilters.find((f) => f.id === "status")?.value || [];

    const localizations: Array<Localizations> = await getLocalizations();


  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button
          size="sm"
          color={filterStatuses.length > 0 ? "blue.300" : ""}
          leftIcon={<Icon as={FilterIcon} fontSize={18} />}
        >
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Text fontSize="md" fontWeight="bold" mb={4}>
            Filter By:
          </Text>
          <Text fontWeight="bold" color="gray.400" mb={1}>
            Status
          </Text>
          <VStack align="flex-start" spacing={1}>
            {localizations.map((localization) => (
              <StatusItem
                status={localization}
                isActive={filterStatuses.includes(localization.id_localization)}
                setColumnFilters={setColumnFilters}
                key={localization.id_localization}
              />
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default FilterPopover;
