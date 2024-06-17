import AddItemModal from "../components/AddItemModal";
import { useRef, useState } from "react";
import { Tabs, ConfigProvider } from "antd";
import TableView from "../components/TableView";
import CardView from "../components/CardView";
import { createContext } from "react";

export const homeContext = createContext<any>({});

function Home() {
  const addItemModelRef = useRef<HTMLDialogElement>(null);
  const [catSort, setCatSort] = useState({ isSorted: false, goSort: false });
  const [isMutating, setIsMutating] = useState(false);

  const openAddItemModal = () => {
    addItemModelRef.current?.showModal();
  };
  //
  return (
    <homeContext.Provider
      value={{
        catSort,
        setCatSort,
        openAddItemModal,
        isMutating,
        setIsMutating,
      }}
    >
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
                children: <TableView />,
              },
              {
                key: "2",
                label: "Card View",
                children: <CardView />,
              },
            ]}
          />
        </ConfigProvider>

        <AddItemModal modalRef={addItemModelRef} />
      </div>
    </homeContext.Provider>
  );
}

export default Home;
