import React, { useContext, useReducer, useEffect } from "react";
import { Store } from "../Store.js";
import Navv from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Chart from "react-google-charts";
import { Helmet } from "react-helmet-async";
import "../styles/Dashboard.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Dashboard() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/orders/summary", {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <Helmet>
        <title>LTBT | Admin | Dashboard</title>
      </Helmet>
      <div className="">
        <Navv />
      </div>
      <div className="dashboard-container">
        <h1 className="mb-3">Dashboard</h1>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <strong>
                        {" "}
                        {summary.users && summary.users[0]
                          ? summary.users[0].numUsers
                          : 0}{" "}
                      </strong>
                    </Card.Title>
                    <Card.Text> Users</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <strong>
                        {summary.orders && summary.users[0]
                          ? summary.orders[0].numOrders
                          : 0}
                      </strong>
                    </Card.Title>
                    <Card.Text> Orders</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <strong>
                        {" "}
                        $
                        {summary.orders && summary.users[0]
                          ? summary.orders[0].totalSales.toFixed(2)
                          : 0}
                      </strong>
                    </Card.Title>
                    <Card.Text> Orders</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="my-3">
              <h2 className="mt-5">Daily Sales</h2>
              <p>Daily sales by total price of order.</p>
              {summary.dailyOrders.length === 0 ? (
                <MessageBox>No Sale</MessageBox>
              ) : (
                <Chart
                  width="100%"
                  height="400px"
                  chartType="AreaChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ["Date", "Sales"],
                    ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                  ]}
                ></Chart>
              )}
            </div>
            <div className="my-3">
              <h2>Categories</h2>
              <p>Overview of your product categories.</p>
              {summary.productCategories.length === 0 ? (
                <MessageBox>No Category</MessageBox>
              ) : (
                <Chart
                  width="100%"
                  height="400px"
                  chartType="PieChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ["Category", "Products"],
                    ...summary.productCategories.map((x) => [x._id, x.count]),
                  ]}
                ></Chart>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
