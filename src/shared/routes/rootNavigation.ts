/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createRef, RefObject } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

interface NavigateProps {
  name: string;
  params: Record<string, unknown>;
}

type Routes = { name: string };

interface ResetProps {
  routes: Array<Routes>;
  index: number;
}

export const navigationRef: RefObject<NavigationContainerRef> = createRef();

export function navigate({ name, params }: NavigateProps) {
  navigationRef.current?.navigate(name, params);
}

export function reset({ routes, index }: ResetProps) {
  navigationRef.current?.reset({
    routes,
    index,
  });
}
