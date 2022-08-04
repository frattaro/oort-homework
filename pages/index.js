import { css } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

import { AppPage, TooltipIfTruncated } from "../components";

const columns = [
  {
    field: "name",
    headerName: "name",
    flex: 1
  },
  { field: "id", headerName: "id", flex: 2 },
  { field: "type", headerName: "type", flex: 1 },
  {
    field: "state",
    headerName: "state",
    flex: 1
  },
  {
    field: "az",
    headerName: "az",
    flex: 1
  },
  { field: "public IP", headerName: "public IP", flex: 1 },
  {
    field: "private IPs",
    headerName: "private IPs",
    flex: 1
  }
].map((x) => {
  x.renderCell = ({ value }) => (
    <TooltipIfTruncated
      css={css`
        overflow: hidden;
        text-overflow: ellipsis;
      `}
    >
      {value}
    </TooltipIfTruncated>
  );

  return x;
});

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
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
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
          css={css`
            background-color: rgba(255, 255, 255, 0.05);
            backdrop-filter: saturate(180%) blur(5px);
            background-image: none;
            margin: 12px;
            margin-bottom: 6px;
          `}
        />
      </div>
    </AppPage>
  );
}
