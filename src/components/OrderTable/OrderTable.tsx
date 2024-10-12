import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { createTheme, ThemeProvider } from "@mui/material";
// import IconButton from "../IconButton/IconButton";
// import { PiClipboardText } from "react-icons/pi";
import styles from "./OrderTable.module.css";
import { useSideBar } from "../../context/SidebarContext";

const OrderTable = () => {
  const { showLeftBar, showRightBar } = useSideBar();
  const [loading, setLoading] = useState<boolean>(true);
  const now = new Date();
  const data = [
    {
      id: "#CM9801",
      user: "Natali Craig",
      project: "Client Project",
      address: "Meadow Lane Oakland",
      date: new Date(now.getTime() - 30 * 60000),
      status: "Progress",
    },
    {
      id: "#CM9802",
      user: "Kate Morrison",
      project: "Admin Dashboard",
      address: "Larry San Francisco",
      date: new Date(now.getTime() - 5 * 60 * 60000),
      status: "Complete",
    },
    {
      id: "#CM9803",
      user: "Drew Cano",
      project: "Landing Page",
      address: "Bagwell Avenue Ocala",
      date: new Date(now.getTime() - 8 * 60 * 60000),
      status: "Pending",
    },
    {
      id: "#CM9804",
      user: "Kate Morrison",
      project: "Admin Dashboard",
      address: "Larry San Francisco",
      date: new Date(now.getTime() - 10 * 60 * 60000),
      status: "Approved",
    },
  ];

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [showLeftBar, showRightBar]);

  // const [selectedRow, setSelectedRow] = useState<any[]>([]);
  const [paginationModel] = useState({
    pageSize: 4,
    page: 0,
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Order ID",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "user",
      headerName: "User",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params) => (
        <div className={styles.user}>
          <img src="/user.png" alt="user" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "project",
      headerName: "Project",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className={styles.address}>
            <span>{params.value}</span>
            {/* <div className={styles.iconBtn}>
              <IconButton
                icon={<PiClipboardText className={styles.icon} />}
                onClick={() => navigator.clipboard.writeText(params.value)}
              />
            </div> */}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params) => (
        <span>
          {formatDistanceToNow(new Date(params.value), { addSuffix: true })}
        </span>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params) => (
        <span className={styles[params.value]}>• {params.value}</span>
      ),
    },
  ];

  const myTheme = createTheme({
    components: {
      //@ts-ignore
      MuiDataGrid: {
        styleOverrides: {
          root: {
            "--DataGrid-containerBackground": "transparent",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "var(--s-font)",
            color: "var(--text-primary-color)",

            ".MuiDataGrid-checkboxInput": {
              display: "none",
            },

            ".MuiDataGrid-row:hover .MuiDataGrid-checkboxInput": {
              display: "block",
            },

            ".Mui-checked": {
              display: "block",
            },

            "& .MuiTablePagination-root": {
              color: "var(--black-40)",
            },

            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            ".MuiSvgIcon-root": {
              color: "var(--text-primary-color)",
              height: "var(--m)",
              width: "var(--m)",
            },

            "& .MuiDataGrid-columnHeaders": {
              color: "var(--black-40)",
            },

            "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within":
              {
                outline: "none !important",
              },
          },
          row: {
            "&:hover": {
              backgroundColor: "var(--Primary-Light)",
              borderRadius: "var(--xxl)",
            },
            "&.Mui-selected": {
              borderRadius: "var(--xxl)",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "var(--Primary-Light)",
              },
            },
          },
        },
      },
    },
  });
  if (loading) return <div></div>;
  return (
    <ThemeProvider theme={myTheme}>
      <DataGrid
        rows={data}
        style={{ maxWidth: "100%", minWidth: "500px", flex: 1 }}
        columns={columns}
        checkboxSelection
        disableDensitySelector
        disableColumnSelector
        disableColumnMenu
        disableRowSelectionOnClick
        hideFooterSelectedRowCount={true}
        paginationMode="server"
        paginationModel={paginationModel}
        pageSizeOptions={[4]}
        rowCount={4}
        rowHeight={40}
        columnHeaderHeight={40}
      />
    </ThemeProvider>
  );
};

export default OrderTable;
