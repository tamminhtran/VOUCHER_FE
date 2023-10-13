import React from "react";
import { Overview } from "./components/Overview";
import { Brand } from "./components/Brand";
import { Category } from "./components/Category";
export const Homepage = () => {
  return (
    <div className="homepage">
      <Overview />
      <Brand title="Thương hiệu nổi bật" isNew={false} />
      <Brand title="Thương hiệu mới" isNew={true} />
      <Category />
    </div>
  );
};
