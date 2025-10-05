import { createContext, useContext } from 'react';
import type { ButtonSizeKey, ButtonToneKey, ButtonVariantKey } from '@milkshake-ui/core';

export type ButtonGroupContextValue = {
  variant?: ButtonVariantKey;
  tone?: ButtonToneKey;
  size?: ButtonSizeKey;
  block?: boolean;
};

const ButtonGroupContext = createContext<ButtonGroupContextValue | null>(null);

export const ButtonGroupProvider = ButtonGroupContext.Provider;

export function useButtonGroupContext(): ButtonGroupContextValue | null {
  return useContext(ButtonGroupContext);
}
