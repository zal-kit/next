import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ParamsRecord = Record<
  string,
  null | number | string | string[] | undefined
>;

export interface PushWithParamOptions {
  withPreviousParams?: boolean;
}

export const useRouteFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentParams = Object.fromEntries(searchParams.entries());

  const pushWithParam = (
    pageUrl: string,
    params: ParamsRecord = {},
    options: PushWithParamOptions = {},
  ) => {
    const newParams = new URLSearchParams(
      options.withPreviousParams ? currentParams : {},
    );

    Object.entries(params).forEach(([key, value]) => {
      newParams.delete(key);

      if (value == null || value === "") return;

      if (Array.isArray(value)) {
        value.forEach((v) => newParams.append(key, v.toString()));
      } else {
        newParams.set(key, value.toString());
      }
    });

    const queryString = newParams.toString();

    router.push(
      queryString
        ? `${pageUrl || pathname}?${queryString}`
        : `${pageUrl || pathname}`,
      { scroll: false },
    );
  };

  return { params: currentParams, pushWithParam, searchParams };
};
