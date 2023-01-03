import ReactPaginate from "react-paginate";
import classes from './pagination.module.css';

const PaginationSection = ({ info, setPageNumber}) => {
  return (
    <ReactPaginate
      pageCount={info?.pages}
      className={classes.container}
      nextLabel=">"
      previousLabel="<"
      nextClassName={classes.slider}
      previousClassName={classes.slider}
      pageClassName={classes["page-selected"]}
      pageLinkClassName={classes["page-item"]}
      activeLinkClassName={classes.active}
      onPageChange={(data) => setPageNumber(data.selected + 1)}
    />
  );
};

export default PaginationSection;
