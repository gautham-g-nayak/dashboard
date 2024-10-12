import styles from "./Products.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from "@mui/material";

const data = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  backgroundColor: "transparent",
  color: "var(--text-primary-color)",
  fontSize: "var(--s-font)",
}));

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "1px solid var(--black-20)",
  backgroundColor: "transparent",
  color: "var(--text-primary-color)",
  fontSize: "var(--s-font)",
}));

const Products = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Top Selling Products</span>
      <TableContainer
        elevation={0}
        component={Paper}
        sx={{ backgroundColor: "transparent" }}
      >
        <Table aria-label="simple table">
          {/* Table Header */}
          <TableHead>
            <TableRow>
              <StyledHeaderCell align="left">Name</StyledHeaderCell>
              <StyledHeaderCell align="left">Price</StyledHeaderCell>
              <StyledHeaderCell align="left">Quantity</StyledHeaderCell>
              <StyledHeaderCell align="left">Amount</StyledHeaderCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.price}</StyledTableCell>
                <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                <StyledTableCell align="left">{row.amount}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
