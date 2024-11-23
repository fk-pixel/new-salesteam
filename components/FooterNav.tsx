import {
  AlertOutlined,
  BarsOutlined,
  MoneyCollectFilled,
  PlusOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Icon } from "antd";

const FooterNav = () => {
  return (
    <Layout.Footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap text-sm">
          {/* Column 1 */}
          <div className="w-full sm:w-auto mb-4">
            <h4 className="text-white font-medium mb-2">Shop and Learn</h4>
            <ul>
              <li className="mb-1 hover:text-white">
                <a href="/">Store</a>
              </li>
              {/* <li className="mb-1 hover:text-white">
                <a href="/">Mac</a>
              </li>
              <li className="mb-1 hover:text-white">
                <a href="/">iPad</a>
              </li>
              <li className="mb-1 hover:text-white">
                <a href="/">iPhone</a>
              </li> */}
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-auto mb-4">
            <h4 className="text-white font-medium mb-2">Services</h4>
            <ul>
              <li className="mb-1 hover:text-white">
                <a href="/">Details</a>
              </li>
              {/* <li className="mb-1 hover:text-white">
                <a href="/">Apple TV+</a>
              </li>
              <li className="mb-1 hover:text-white">
                <a href="/">iCloud</a>
              </li> */}
              {/* Add more services */}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-auto mb-4">
            <h4 className="text-white font-medium mb-2">Store</h4>
            <ul>
              <li className="mb-1 hover:text-white">
                <a href="/">Find a Store</a>
              </li>
              {/* <li className="mb-1 hover:text-white">
                <a href="/">Genius Bar</a>
              </li>
              <li className="mb-1 hover:text-white">
                <a href="/">Today at Apple</a>
              </li> */}
              {/* Add more links */}
            </ul>
          </div>

          {/* Miscellaneous */}
          <div className="w-full text-center mt-4 border-t border-gray-700 pt-4">
            <p>© 2024 My Next App. All rights reserved.</p>
            <p className="text-xs mt-1">
              <a href="/legal" className="hover:text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms" className="hover:text-white">
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default FooterNav;
