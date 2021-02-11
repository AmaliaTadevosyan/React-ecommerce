import React from "react";
import { ShopServiceConsumer } from "../service-context";

export const withShopStoreService = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <ShopServiceConsumer>
          {(shopStoreService) => {
            return (
              <Component shopStoreService={shopStoreService} {...this.props} />
            );
          }}
        </ShopServiceConsumer>
      );
    }
  };
};
