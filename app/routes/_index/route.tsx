import type { MetaFunction } from "@remix-run/node"

import { cn } from "@/lib/utils"

export const meta: MetaFunction = () => {
  return [
    { title: "Search POC - Home" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Page() {
  return <h1 className="text-3xl font-bold underline text-red-600">Home</h1>
}
