import { addToast, Button, Card, CardBody, CardFooter, DatePicker } from "@heroui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CalendarDate } from "@internationalized/date";
import { searchDate } from "@/utils/actions";
import ListSearch from "../list/ListSearch";

type DateType = {
  startDate:CalendarDate | null;
  endDate:CalendarDate| null;
}
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
  date: Date;
}
const Report = () => {
  const [dataPicker, setDataPicker] = useState<DateType>({
    startDate: null,
    endDate: null,
  });
  const [fetchData, setFetchData] = useState<resultTypeData[]>([])
  const [loading, setLoading] = useState(false);

  // Handler for the start date picker
  const handleStartDateChange = (date:CalendarDate | null) => {
    setDataPicker((prev) => ({ ...prev, startDate: date }));
  };
  // Handler for the end date picker
  const handleEndDateChange = (date:CalendarDate | null) => {
    setDataPicker((prev) => ({ ...prev, endDate: date }));
  };

  const handleSearch = async () => {
    const formattedData = {
      startDate: dataPicker.startDate ? dataPicker.startDate.toString() : null,
      endDate: dataPicker.endDate ? dataPicker.endDate.toString() : null,
    };
  if (formattedData.startDate && formattedData.endDate) {
    setLoading(true); 
    const resultData = await searchDate(formattedData);
    if (Array.isArray(resultData)) {
      setFetchData(resultData); 
    }
    setLoading(false); 
  } else {
    addToast({
      description:"ກະລຸນາປ້ອນວັນທີເພື່ອຄົ້ນຫາ",
      color:"danger",
      size:"sm",
      timeout:3000,
    })
  }
  };
  const resetData = () => {
    setFetchData([]); // Clear the fetchData
  };
  return (
    <>
    <Card>
      <CardBody className="flex gap-2">
        <DatePicker
          variant="bordered"
          className="max-w-[284px]"
          label="ເລືອກວັນທີເລີ່ມຕົ້ນຄົ້ນຫາ"
          name="starDate"
          size="sm"
          value={dataPicker.startDate}
          onChange={handleStartDateChange}
        />
        <div>ຫາ</div>
        <DatePicker
          variant="bordered"
          className="max-w-[284px]"
          label="ເລືອກວັນທີສິ້ນສຸດຄົ້ນຫາ"
          name="endDate"
          size="sm"
          value={dataPicker.endDate}
          onChange={handleEndDateChange}
          />
      </CardBody>
      <CardFooter>
        <Button
          onPress={handleSearch}
          className="text-white"
          color="success"
          size="md"
          isDisabled={loading}
        >
          <FiSearch size={20} /> ຄົ້ນຫາ
        </Button>
      </CardFooter>
    <ListSearch fetchData = {fetchData} resetData = {resetData} />
    </Card>
    </>
  );
};

export default Report;
