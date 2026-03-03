import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { env: "Dev", failure: 15 },
  { env: "Staging", failure: 20 },
  { env: "Prod", failure: 10 },
];

function FailureRateChart() {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">Failure Rate</Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="env" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="failure" fill="#d32f2f" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default FailureRateChart;