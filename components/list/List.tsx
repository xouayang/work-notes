import { getDataList } from "@/utils/actions";
import {
  Button,
  getKeyValue,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useEffect, useState, useMemo } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";

type Data = {
  id: string;
  image: string;
  taskWork: string;
  amountPeople: string;
  room: string;
  reason: string;
  kilomet: string;
  longItude: string;
  laItude: string;
  another: string;
  date: string | Date;
};

const List = () => {
  const [isFetch, setIsFetch] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(isFetch.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return isFetch.slice(start, end);
  }, [page, isFetch]);
  const [isDeleteId, setIsDeleteId] = useState("");
  const [isUpdateId, setIsUpdateId] = useState<Partial<Data>>({});
  const [isDeleteIdOpen, setIsDeleteIdOpen] = useState(false);
  const [isUpdateIdOpen, setIsUpdateIdOpen] = useState(false);
  //  const {isOpen,onOpen,onOpenChange} = useDisclosure()
  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await getDataList();
        if (Array.isArray(result)) {
          setIsFetch(result);
      } else {
          setIsFetch([]); // Fallback to an empty array
          console.error("Data fetched is not an array:", result);
      }
      
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-9">
        ກຳລັງໂຫຼດຂໍ້ມູນ...
      </div>
    );
  }
  const handleEdit = (item:Data) => {
    setIsUpdateId(item);
    setIsUpdateIdOpen(true)
  };
  const handleDelete = (id: string) => {
    setIsDeleteId(id);
    setIsDeleteIdOpen(true);
  };
  return (
    <>
      <div className="p-4">
        <Table
          aria-label="Example table with client side pagination"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader>
            {/* <TableColumn key="image">ຮູບ</TableColumn> */}
            <TableColumn key="taskWork">ໜ້າວຽກ</TableColumn>
            <TableColumn key="amountPeople">ຈຳນວນຄົນ</TableColumn>
            <TableColumn key="room">ຫ້ອງປະຕິບັດວຽກ</TableColumn>
            <TableColumn key="reason">ເຫດຜົນທີ່ເກີດຂື້ນ</TableColumn>
            <TableColumn key="kilomet">ກີໂລເເມັດທີ່ເກີດຂື້ນ</TableColumn>
            <TableColumn key="longItude">Longitude</TableColumn>
            <TableColumn key="laItude">Latitude</TableColumn>
            <TableColumn key="createAt">ວັນທີ</TableColumn>
            <TableColumn key="actions">Actions</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => {
                  switch (columnKey) {
                    case "actions":
                      return (
                        <TableCell className="flex gap-2">
                          <Button
                            size="sm"
                            className="text-white"
                            color="success"
                            onPress={() => handleEdit(item)}
                          >
                            <FiEdit2 /> ແກ້ໄຂ
                          </Button>
                          <Button
                            size="sm"
                            color="danger"
                            onPress={() =>
                              handleDelete(
                                item.id,
                              )
                            }
                          >
                            <FiTrash2 /> ລຶບ
                          </Button>
                        </TableCell>
                      );
                    case "createAt":
                      return (
                        <TableCell>
                          {item.date instanceof Date
                            ? item.date.toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                              })
                            : "-"}
                        </TableCell>
                      );

                    default:
                      return (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      );
                  }
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DeleteModal
          setIsFetch={setIsFetch}
          deleteId={isDeleteId}
          isOpen={isDeleteIdOpen}
          onClose={() => setIsDeleteIdOpen(false)}
        />
        <EditModal setIsFetch={setIsFetch} updateId={isUpdateId} isOpen = {isUpdateIdOpen} onClose = {() => setIsUpdateIdOpen(false)} />
      </div>
    </>
  );
};

export default List;
