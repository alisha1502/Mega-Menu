import { Outlet } from "react-router-dom";

const Resources = () => {
  return (
    <div className="text-color">
      <h1>Resource</h1>
      <Outlet />
    </div>
  );
};

export default Resources;
