import { css } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

import { AppPage } from "../components";

const columns = [
  { field: "name", headerName: "name" },
  { field: "id", headerName: "id" },
  { field: "type", headerName: "type" },
  {
    field: "state",
    headerName: "state"
  },
  {
    field: "az",
    headerName: "az"
  },
  { field: "public IP", headerName: "public IP" },
  {
    field: "private IPs",
    headerName: "private IPs"
  }
];

export default function Index() {
  const session = useSession();
  const [page, setPage] = useState(0);
  const [sortModel, setSortModel] = useState([
    {
      field: "id",
      sort: "asc"
    }
  ]);

  const { data, status } = useQuery({
    queryKey: ["ec2Instances", page, sortModel],
    queryFn: async () => {
      const response = await fetch(`/api/ec2`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${session.data.accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          page,
          sortModel
        })
      });

      const instances = await response.json();
      return instances;
    },
    retry: false
  });

  return (
    <AppPage title="EC2 Instances">
      <div
        css={css`
          height: 371px;
        `}
      >
        <DataGrid
          page={page}
          rows={data?.instances || []}
          columns={columns}
          pageSize={5}
          rowCount={data?.totalResults || 0}
          rowsPerPageOptions={[5]}
          onPageChange={(number) => {
            setPage(number);
          }}
          disableColumnFilter
          onSortModelChange={(newSortModel) => setSortModel(newSortModel[0])}
          sortingMode="server"
          paginationMode="server"
          loading={status === "loading"}
        />
      </div>
    </AppPage>
  );
}
