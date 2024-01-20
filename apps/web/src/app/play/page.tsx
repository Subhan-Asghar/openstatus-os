import * as z from "zod";

import { BackButton } from "@/components/layout/back-button";
import CheckerPlay from "./checker/_components/checker-play";
import StatusPlay from "./status/_components/status-play";

/**
 * allowed URL search params
 */
const searchParamsSchema = z.object({
  timezone: z.string().optional(),
});

export default async function PlayPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = searchParamsSchema.safeParse(searchParams);
  const timezone = search.success ? search.data.timezone : undefined;

  return (
    <>
      <BackButton href="/" />
      <div className="grid w-full gap-4">
        <StatusPlay timezone={timezone} />
        <CheckerPlay />
      </div>
    </>
  );
}
