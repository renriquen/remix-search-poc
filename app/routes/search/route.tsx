import { Search } from "@/routes/search/components/search"
import type { MetaFunction } from "@remix-run/node"

import { cn } from "@/lib/utils"

export const meta: MetaFunction = () => {
  return [
    { title: "Search POC - Search" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Page() {
  return <Search />
}
