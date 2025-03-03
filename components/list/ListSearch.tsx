import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Image,
} from "@heroui/react";
import { useRef } from "react";
import { FiPrinter, FiX } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import { format } from "date-fns";
import "../../assets/printJs.css";
type resultTypeData = {
  id: string;
  taskWork: string;
  room: string;
  reason: string;
  kilomet: string;
  another: string;
  amountPeople: string;
  image: string;
  laItude: string;
  longItude: string;
  createdAt: string | Date;
};

type propsType = {
  fetchData: resultTypeData[];
  resetData: () => void;
};

const ListSearch = ({ fetchData, resetData }: propsType) => {
  console.log("from report", fetchData);


  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const datatoPrint = format(Date.now(), "dd/MM/yyyy hh:mm a");
  return (
    <div className="p-4">

      <div ref={contentRef}>
        <div className="print-only flex justify-end pb-2 pt-2">
          ວັນທີ : {datatoPrint}
        </div>
        <Table aria-label="task work table">
          <TableHeader>
            <TableColumn key="index">ລຳດັບ</TableColumn>
            <TableColumn key="image">ຮູບ</TableColumn>
            <TableColumn key="taskWork">ໜ້າວຽກ</TableColumn>
            <TableColumn key="amountPeople">ຈຳນວນຄົນ</TableColumn>
            <TableColumn key="room">ຫ້ອງປະຕິບັດວຽກ</TableColumn>
            <TableColumn key="reason">ເຫດຜົນທີ່ເກີດຂື້ນ</TableColumn>
            <TableColumn key="kilomet">ກີໂລແມັດທີ່ເກີດຂື້ນ</TableColumn>
            <TableColumn key="longItude">Longitude</TableColumn>
            <TableColumn key="laItude">Latitude</TableColumn>
            <TableColumn key="another">ອື່ນໆ</TableColumn>
            <TableColumn key="createdAt">ວັນທີ</TableColumn>
          </TableHeader>
          <TableBody
            items={fetchData.map((item, i) => ({ ...item, index: i + 1 }))}
          >
            {(item) => (
              <TableRow key={item.id}>
                <TableCell>{item.index}</TableCell>
                <TableCell>
                  <Image
                    isZoomed
                    alt="image task work"
                    src={item.image}
                    className="w-12 h-12 object-cover rounded xs:w-10 xs:h-10 sm:w-24 sm:h-24 md:w-32 md:h-32"
                  />
                </TableCell>
                <TableCell>{item.taskWork}</TableCell>
                <TableCell>{item.amountPeople}</TableCell>
                <TableCell>{item.room}</TableCell>
                <TableCell>{item.reason}</TableCell>
                <TableCell>{item.kilomet}</TableCell>
                <TableCell>{item.longItude}</TableCell>
                <TableCell>{item.laItude}</TableCell>
                <TableCell>{item.another}</TableCell>
                <TableCell>
                  {new Date(item.createdAt).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div>
        {fetchData.length === 0 ? (
          <div className="flex justify-end my-2 gap-2">
            <Button isDisabled={true}>Print</Button>
          </div>
        ) : (
          <div className="flex justify-end py-2 gap-2">
            <Button
              color="success"
              className="text-white"
              onPress={() => reactToPrintFn()}
            >
              <FiPrinter />
              ພິມ
            </Button>
            <Button onPress={resetData} color="danger">
              <FiX /> ລ້າງຂໍ້ມູນ
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListSearch;
