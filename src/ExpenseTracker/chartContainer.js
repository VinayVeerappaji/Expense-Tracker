import { connect } from "react-redux";
import Charts from "./Charts";

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (payload) => {
      dispatch({
        type: "ADD_TRANSACTION",
        payload
      });
    },
    deleteTransaction: (index) => {
      dispatch({
        type: "DELETE_TRANSACTION",
        index
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
