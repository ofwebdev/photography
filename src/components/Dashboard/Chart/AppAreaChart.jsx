import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
// components
import useChart from "../../Chart/useChart";

// ----------------------------------------------------------------------

AppAreaChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default function AppAreaChart({
  title,
  subheader,
  chartData,
  chartLabels,
  ...other
}) {
  const series = chartData.map((item) => ({
    name: item.label,
    data: item.values,
  }));

  const chartOptions = useChart({
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: chartLabels.map((dateString) => {
        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        return monthNames[monthIndex];
      }),
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="area"
          series={series}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
