import React from "react";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import AppWebsiteVisits from "../../components/Dashboard/Chart/AppWebsiteVisits";
import AppCurrentVisits from "../../components/Dashboard/Chart/AppCurrentVisits";
import AppConversationRates from "../../components/Dashboard/Chart/AppConversationRates";
import AppSubject from "../../components/Dashboard/Chart/AppSubject";
import AppCard from "../../components/Dashboard/Card/AppCard";

// icon
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Person3Icon from "@mui/icons-material/Person3";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import PestControlRoundedIcon from "@mui/icons-material/PestControlRounded";
import AppAreaChart from "../../components/Dashboard/Chart/AppAreaChart";

function DashboardAppPage() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" p={0}>
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          // borderBottom: "dashed",
          borderColor: theme.palette.text.disabled,
          // borderWidth: "1px",
        }}
      >
        Hi, Welcome back Omor
      </Typography>

      <Grid container spacing={3} p={0}>
        <Grid item xs={12} sm={6} md={3}>
          <AppCard
            title="Weekly Sales"
            total={714000}
            icon={<AttachMoneyIcon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppCard
            title="New Users"
            total={1352831}
            color="info"
            icon={<Person3Icon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppCard
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<StoreMallDirectoryRoundedIcon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppCard
            title="Bug Reports"
            total={234}
            color="error"
            icon={<PestControlRoundedIcon />}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chartLabels={[
              "01/01/2003",
              "02/01/2003",
              "03/01/2003",
              "04/01/2003",
              "05/01/2003",
              "06/01/2003",
              "07/01/2003",
              "08/01/2003",
              "09/01/2003",
              "10/01/2003",
              "11/01/2003",
            ]}
            chartData={[
              {
                name: "Team A",
                type: "column",
                fill: "solid",
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
              },
              {
                name: "Team B",
                type: "area",
                fill: "gradient",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
              },
              {
                name: "Team C",
                type: "line",
                fill: "solid",
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
              },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chartData={[
              { label: "America", value: 4344 },
              { label: "Asia", value: 5435 },
              { label: "Europe", value: 1443 },
              { label: "Africa", value: 4443 },
            ]}
            chartColors={[
              theme.palette.primary.main,
              theme.palette.info.main,
              theme.palette.warning.main,
              theme.palette.error.main,
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppConversationRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chartData={[
              { label: "Italy", value: 400 },
              { label: "Japan", value: 430 },
              { label: "China", value: 448 },
              { label: "Canada", value: 470 },
              { label: "France", value: 540 },
              { label: "Germany", value: 580 },
              { label: "South Korea", value: 690 },
              { label: "Netherlands", value: 1100 },
              { label: "United States", value: 1200 },
              { label: "United Kingdom", value: 1380 },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <AppSubject
            title="Current Subject"
            chartLabels={[
              "English",
              "History",
              "Physics",
              "Geography",
              "Chinese",
              "Math",
            ]}
            chartData={[
              { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
              { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
              { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
            ]}
            chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppAreaChart
            title="Area Chart"
            subheader="Area chart subheader"
            chartLabels={[
              "01/01/2003",
              "02/01/2003",
              "03/01/2003",
              "04/01/2003",
              "05/01/2003",
              "06/01/2003",
              "07/01/2003",
              "08/01/2003",
              "09/01/2003",
              "10/01/2003",
              "11/01/2003",
              "12/01/2003",
            ]}
            chartData={[
              {
                label: "Asia",
                values: [11, 40, 28, 51, 130, 42, 50, 80, 30, 90, 40, 30],
              },
              {
                label: "America",
                values: [11, 32, 45, 32, 34, 52, 41, 35, 49, 52, 30, 10],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardAppPage;
