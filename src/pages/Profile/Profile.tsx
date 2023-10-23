import { Wrapper } from "components/Wrapper/Wrapper";
import "./Profile.scss";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AccountTab } from "./components/AccountTab";
import { OrdersTab } from "./components/OrdersTab";

const TABS = [
  {
    tab: "Tài khoản",
    ic: <AccountCircleIcon />,
  },
  {
    tab: "Lịch sử đơn hàng",
    ic: <ShoppingCartIcon />,
  },
];
export const Profile = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Wrapper>
      <div className="profile">
        <div className="left">
          <div className="tabs">
            {TABS.map((t, key) => {
              return (
                <div
                  className={activeTab === key ? "tab active" : "tab"}
                  onClick={() => setActiveTab(key)}
                >
                  {t.ic} <span>{t.tab}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          {activeTab === 0 && <AccountTab />}
          {activeTab === 1 && <OrdersTab />}
        </div>
      </div>
    </Wrapper>
  );
};
