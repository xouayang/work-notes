  "use client"
import { Tabs as TabsComponent , Tab, Card, CardBody } from "@heroui/react";
import DataUpload from "../data-image-upload/FormImageUpload";
import List from "../list/List";
import Report from "../data-image-upload/Report";

const Tabs = () => {
  return (
      <Card fullWidth className="shadow-large max-w-full w-[1200px] h-auto">
        <CardBody>
          <TabsComponent color="primary" aria-label="Options" fullWidth>
            <Tab key="save_data" title="ບັນທຶກຂໍ້ມູນ">
              <DataUpload/>
            </Tab>
            <Tab key="show_data" title="ສະເເດງຂໍ້ມູນ">
             <List/>
            </Tab>
            <Tab key="report" title="ລາຍງານ">
              <Report/>
            </Tab>
          </TabsComponent>
        </CardBody>
      </Card>
  );
};
export default Tabs;
