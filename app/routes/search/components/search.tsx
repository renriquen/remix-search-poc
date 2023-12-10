import { useEffect, useState } from "react"
import { SearchBox } from "@/routes/search/components/search-box"
import { useSearchParams } from "@remix-run/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function validateSelectedTab(
  selectedTabParam: string | null,
  searchTypeParam: string | null
) {
  if (!searchTypeParam || searchTypeParam == "all") {
    return selectedTabParam ? selectedTabParam : "clients"
  } else if (searchTypeParam == "clients") {
    return "clients"
  } else {
    return "projects"
  }
}
export function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedTabParam = searchParams.get("tab")
  const searchTypeParam = searchParams.get("search-type")
  const [selectedTab, setSelectedTab] = useState(
    validateSelectedTab(selectedTabParam, searchTypeParam)
  )

  useEffect(() => {
    setSelectedTab(validateSelectedTab(selectedTabParam, searchTypeParam))
  }, [selectedTabParam, searchTypeParam])

  return (
    <div className="container mx-auto p-6">
      <SearchBox />

      <Tabs
        value={selectedTab}
        onValueChange={(value) => {
          const newSearchParams = new URLSearchParams(searchParams)
          newSearchParams.set("tab", value)
          setSearchParams(newSearchParams)
          // router.push(pathname + `?${newSearchParams}`)
        }}
      >
        <TabsList className="flex gap-4 mb-6 justify-start">
          {(searchTypeParam == "all" ||
            searchTypeParam == "clients" ||
            !searchTypeParam) && (
            <TabsTrigger value="clients">Clients</TabsTrigger>
          )}
          {(searchTypeParam == "all" ||
            searchTypeParam == "projects" ||
            !searchTypeParam) && (
            <TabsTrigger value="projects">Projects</TabsTrigger>
          )}
        </TabsList>
        {(searchTypeParam == "all" ||
          searchTypeParam == "clients" ||
          !searchTypeParam) && (
          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <h1>Clients</h1>
              </CardContent>
            </Card>
          </TabsContent>
        )}
        {(searchTypeParam == "all" ||
          searchTypeParam == "projects" ||
          !searchTypeParam) && (
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <h1>Projects</h1>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}
