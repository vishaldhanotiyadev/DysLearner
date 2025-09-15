import {
  VariantProps,
  createRestyleComponent,
  createVariant,
} from "@shopify/restyle";

import { ReactChild, ReactChildren } from "react";

import Box from "./Box";

import React from "react";
import { Theme } from "../../theme/theme";

const BoxContainer = createRestyleComponent<
  VariantProps<Theme, "shadowBoxVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: "shadowBoxVariants" })], Box);

type Props = React.ComponentProps<typeof BoxContainer> & {
  children: null | ReactChild | ReactChildren | ReactChild[];
};

const ShadowBox = ({ children, variant, ...rest }: Props) => {
  return (
    <BoxContainer variant={variant} {...rest}>
      {children && <>{children}</>}
    </BoxContainer>
  );
};

export default ShadowBox;
