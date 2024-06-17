import AddItemModal from "../components/AddItemModal";
import { useRef, useState } from "react";
import { Tabs, ConfigProvider } from "antd";
import TableView from "../components/TableView";
import CardView from "../components/CardView";
import { useGetItems } from "../shared/hooks/queryHooks";

function Home() {
  const addItemModelRef = useRef<HTMLDialogElement>(null);
  const [catSort, setCatSort] = useState({ isSorted: false, goSort: false });
  const { data } = useGetItems();

  const openAddItemModal = () => {
    addItemModelRef.current?.showModal();
  };
  //
  return (
    <div className="flex justify-center w-screen h-screen relative">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
          components: {
            Tabs: { titleFontSize: 15 },
          },
        }}
      >
        <Tabs
          className="w-auto" //md:w-[910px]
          defaultActiveKey="1"
          centered
          items={[
            {
              key: "1",
              label: "Table View",
              children: (
                <TableView
                  catSort={catSort}
                  setCatSort={setCatSort}
                  openAddItemModal={openAddItemModal}
                />
              ),
            },
            {
              key: "2",
              label: "Card View",
              children: (
                <CardView
                  catSort={catSort}
                  setCatSort={setCatSort}
                  openAddItemModal={openAddItemModal}
                />
              ),
            },
          ]}
        />
      </ConfigProvider>

      <AddItemModal modalRef={addItemModelRef} />
    </div>
  );
}

export default Home;
